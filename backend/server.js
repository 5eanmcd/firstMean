var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var app = express()

var User = require('./models/User.js')
var Post = require('./models/Post.js')

var auth = require('./auth.js')

mongoose.Promise = Promise

var posts = [
    {message: 'hello'},
    {message: 'hi'}
]

app.use(cors())
app.use(bodyParser.json())

app.get('/posts', (req,res) => {
    res.send(posts)
})

app.post('/post', (req,res) => {
    var post = new Post(req.body)

    post.save((err,result) => {
        if(err){
            console.log('saving post error ' + err.message)
            res.status(500).send({message: 'saving post error'})
        }
        else{
            console.log('save post works')
            res.sendStatus(200)
        }
    })
})

app.get('/users', async (req,res) => {
    try {
        var users = await User.find({}, '-password -__v')
        console.log('users returned ' + users)
        res.send(users)
    } catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
})

app.get('/profile/:id', async (req,res) => {
    console.log('profile ' + req.params.id)
    try {
        var user = await User.findById(req.params.id, '-password -__v')
        console.log('users returned ' + user)
        res.status(200).send(user)
    } catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
})

mongoose.connect('mongodb://testUser:testPassword@ds251988.mlab.com:51988/mean-social', (err) => {
    if(!err){
        console.log('connected to mongo')
    }
})

app.use('/auth', auth)
app.listen(3000)