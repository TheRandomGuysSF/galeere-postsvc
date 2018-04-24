const mongoose = require('mongoose');
const modelName = 'Comment';
const commentSchema = new mongoose.Schema({
    article: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Article',
        required: true
    },
    authorId: String,
    content: String,
    meta: [String],
    guestComment: {
        type: Boolean,
        required: true
    },
    deleted: {
        type: Boolean,
        default: false
    },
    created: {
        type: Date, 
        default: new Date() 
    },
    updated: {
        type: Date, 
        default: new Date() 
    },
});