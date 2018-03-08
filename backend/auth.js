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
    user.save((err,result) => {
        if(err){
            console.log('saving user error ' + err.message)
            res.sendStatus(500)
        }
        else{
            console.log('save works')
            res.sendStatus(200)
        }
    })
})

router.post('/login', async(req,res) => {
    // res.send(posts)
    var loginData = req.body
    console.log('email ' + loginData.email)
    console.log('password ' + loginData.password)

    var user = await User.findOne({email: loginData.email})

    if(!user){
        console.log('user NOT found')
        res.status(401).send({message:'Email or Password Invalid'})
    }
    else{

        bcrypt.compare(loginData.password, user.password, (err, isMatch) => {
            if(!isMatch){
                console.log('not matched')
                res.status(401).send({message:'Invalid Credentials'})
            }
            else{
                console.log('user ' + user)

                var payload = {}
                var token = jwt.encode(payload, '123' )

                console.log('token ' + token)

                res.status(200).send({token})
            }
        })
    }
})        

module.exports = router