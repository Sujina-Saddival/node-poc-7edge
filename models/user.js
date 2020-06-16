const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date()
    },
    modifiedAt: {
        type: Date,
        required: true,
        default: Date()
    }
})

module.exports = mongoose.model('User',userSchema);