var bcrypt = require('bcrypt-nodejs')
var User = require('./models/User.js')
var jwt = require('jwt-simple')
var express = require('express')
var router = express.Router()

router.post('/register', (req,res) => {
    // res.send(posts)
    var userData = req.body
    console.log('register post request')
    console.log('email ' + userData.email)
    console.log('password ' + userData.password)

    var user = new User(userData)
    console.log('Attempting user save...')
    user.save((err,newUser) => {
        if(err){
            console.log('registerUser error ' + err.message)
            return res.status(500).send({message:'Error occurred saving user'})
            // return res.sendStatus(500)
        }
        console.log('register works')
        
        createSendToken(res, newUser)
        // return res.status(200).send({message: "User registered successfully"})
    })
})

router.post('/login', async(req,res) => {
    // res.send(posts)
    var loginData = req.body
    console.log('/login email ' + loginData.email)
    // console.log('password ' + loginData.password)

    var user = await User.findOne({email: loginData.email})

    if(!user){
        console.log('/login user NOT found')
        res.status(401).send({message:'Email or Password Invalid'})
    }
    else{
        console.log('/login user found')
        bcrypt.compare(loginData.password, user.password, (err, isMatch) => {
            if(!isMatch){
                console.log('/login user not matched')
                res.status(401).send({message:'Invalid Credentials'})
            }
            else{
                console.log('/login matched user ' + user)
                createSendToken(res, user)
            }
        })
    }
})        

function createSendToken(res, user){
    var payload = {subject: user._id }
    var token = jwt.encode(payload, '123' )

    console.log('token ' + token)
    res.status(200).send({token})
}

var auth = {
    router, 
    checkIsAuthenticated(req,res,next){
        if(!req.header('Authorization')){
            return res.status(401).send({message: 'Unauthorized. Invalid header.'})
        }
    
        var token = req.header('Authorization').split(' ')[1]
        if(!token){
            return res.status(401).send({message: 'Unauthorized. Invalid header found.'})
        }
        console.log('checkingAuthToken ' + token)
    
        var payload = jwt.decode(token, '123')
        if(!payload){
            return res.status(401).send({message: 'Unauthorized. Invalid header object.'})
        }
    
        console.log('checkingAuthToken setting userId ' + payload.subject)
        // console.log('checkingAuthToken setting userId ' + payload.sub)
        req.userId = payload.subject
    
        next()
    }
}

// module.exports = router
module.exports = auth