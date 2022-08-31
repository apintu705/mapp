const mongoose = require('mongoose');

const ReviewSchema =new mongoose.Schema({
    userid: {
        type: String,
        required: true,
    },
    postid: {
        type: String,
        required: true
    },
    review: {
        type: String,
        required: true
    }
},{versionKey:false,timestamps:true});


module.exports= mongoose.model('comment', ReviewSchema);
