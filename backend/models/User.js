var mongoose = require('mongoose')
var bcrypt = require('bcrypt-nodejs')

var userSchema = new mongoose.Schema({
    email: String,
    password: String,
    name: String,
    description: String
})

userSchema.pre('save', function(next) {
    var user = this
    console.log('user save....')
    if (!user.isModified('password'))
        return next()
    bcrypt.hash(user.password, null, null, (err, hash) => {
        if(err){
            return next(err)
        }
        user.password = hash
        console.log('password set to hash: ' + hash)
        next()
  })  
})

module.exports = mongoose.model('User', userSchema)
