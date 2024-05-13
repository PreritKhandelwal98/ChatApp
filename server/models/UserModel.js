const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "name required"]
    },
    email: {
        type: String,
        required: [true, "email required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "password required"]
    },
    profile_pic: {
        type: String,
        default: ""
    }
}, { timestamps: true })

const UserModel = mongoose.model('User', UserSchema)

module.exports = UserModel