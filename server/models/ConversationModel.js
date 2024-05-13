const mongoose = require('mongoose');

const MessageSchema = mongoose.Schema({
    text: {
        type: String,
        default: ""
    },
    imageUrl: {
        type: String,
        default: ""
    },
    videoUrl: {
        type: String,
        default: ""
    },
    senn: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

const ConversationSchema = mongoose.Schema({
    sender: {
        type: mongoose.Types.ObjectId,
        ref: 'user'
    },
    receiver: {
        type: mongoose.Types.ObjectId,
        ref: 'user'
    },
    messages: {
        type: mongoose.Types.ObjectId,
        ref: 'message'
    }
}, { timestapms: true })

const MessageModel = mongoose.model('Message', MessageSchema)
const ConversationModel = mongoose.model('Conversation', ConversationSchema)

module.exports = { ConversationModel, MessageModel }