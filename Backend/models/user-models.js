const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    avatar: {
        type: String,
        default: ''  // You can set a default avatar URL here if needed
    }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
