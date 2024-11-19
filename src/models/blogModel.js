const mongoose = require('mongoose');
const {getMainDb}= require('../database/db.js')

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    blogId:{
        type:String,
        unique:true
    }
});

module.exports = getMainDb().model('Blog', BlogSchema);
