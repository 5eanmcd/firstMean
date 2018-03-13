var mongoose = require('mongoose')

var postSchema = new mongoose.Schema({
    msg: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User'}
}, { bufferCommands: false })

module.exports = mongoose.model('Post', postSchema)
