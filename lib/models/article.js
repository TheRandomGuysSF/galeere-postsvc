const mongoose = require('mongoose');
const modelName = 'Article';
const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    headerImage: String,
    created: {
        type: Date,
        default: new Date()
    },
    updated: {
        type: Date,
        default: new Date()
    },
    body: {
        type: String,
        required: true
    },
    authorId: String,
    tags: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Tag'
    }],
    attachments: [String],
    description: String,
    visible: Boolean
});