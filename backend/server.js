var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var app = express()

var User = require('./models/User.js')
var Post = require('./models/Post.js')

var auth = require('./auth.js')

var jwt = require('jwt-simple')

var assert = require('assert');

mongoose.Promise = global.Promise

app.use(cors())
app.use(bodyParser.json())

app.get('/posts/:id', async (req,res) => {
    var currentTime = new Date().toLocaleString();
    console.log('posts ' + currentTime + ' ' + req.params.id)
    var author = req.params.id
    
    var posts = await Post.find({author})
    console.log('*** posts found ' + currentTime + ' ' + req.params.id)
    return res.send(posts)    
})

app.post('/post',  auth.checkIsAuthenticated, (req,res) => {
    console.log('/post ' + req.userId)
    console.log('/post ' + req.body)
    var postData = req.body
    postData.author = req.userId

    var post = new Post(postData)

    post.save((err,result) => {
        if(err){
            console.log('saving post error ' + err.message)
            res.status(500).send({message: 'saving post error'})
        }
        else{
            console.log('save post works')
            return res.status(200).send({message: 'Post saved successfully'})
            // sendStatus(200)
        }
    })
})

app.get('/users', async (req,res) => {
    try {
        // console.log('/users ' + req.userId)
        var users = await User.find({}, '-password -__v')
        console.log('users returned ' + users)
        res.send(users)
    } catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
})

app.get('/profile/:id', async (req,res) => {
    try {
        var currentTime = new Date().toLocaleString();
        console.error('profile ' + req.params.id + ' ' + currentTime)
        var user = await User.findById(req.params.id, '-password -__v')
        console.log('user found and returned ' + user.email)
        res.status(200).send(user)

        // var currentTime = new Date().toLocaleString();
        // console.log('/profile ' + currentTime + ' ' + req.params.id)
        // var author = req.params.id

        // var user = User.findById(req.params.id, '-password -__v')
        // assert.ok(!(user instanceof Promise));
      
        // // `.exec()` gives you a fully-fledged promise
        // var promise = user.exec();
        // assert.ok(promise instanceof Promise);
    
        // // var posts = await Post.find({author})
        // promise.then(function (user){
        //     console.log('*** profile found ' + currentTime + ' ' + req.params.id)
        //     return res.send(user)   
        // })
    } catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
})

var dbOptions = {
    poolSize: 30,
    // keepAlive: false,
    connectTimeoutMS: 20000,
    socketTimeoutMS: 20000,
    reconnectTries: 100000,
    autoReconnect: true,
    reconnectInterval: 3000,
    bufferMaxEntries: 0 // Disable node driver's buffering as well
}

mongoose.connection.on("connected", () => {     
    var currentTime = new Date().toLocaleString();
    console.log("Connection Established " + currentTime);
});
  
mongoose.connection.on("reconnected", () => {
    var currentTime = new Date().toLocaleString();
    console.log("####### Connection Reestablished " + currentTime);
});

mongoose.connection.on("disconnected", () => {
    console.error("%%%%%%%%%***** Connection Disconnected");
});

mongoose.connection.on("close", () => {
    console.error("***** Connection Closed");
});

mongoose.connection.on("error", (error) => {
    console.error("***** ERROR: " + error);
});

mongoose.set('debug', true);

// mongoose.connect('mongodb://testUser:testPassword@ds251988.mlab.com:51988/mean-social', dbOptions, (err) => {
mongoose.connect('mongodb://testUser:testPassword@ds251988.mlab.com:51988/mean-social', dbOptions, (err) => {
    if(!err){
        console.log('connected to mongo')
    }
    else{
        console.log('NOT Connected to mongo ****')
    }
})

app.use('/auth', auth.router)
app.listen(process.env.PORT || 3000)