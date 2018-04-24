const mongoose = require('mongoose');
const modelName = 'Tag';
const tagSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        index: true    
    }
});