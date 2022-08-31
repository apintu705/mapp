const mongoose = require('mongoose');

const ReviewSchema =new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
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


module.exports= mongoose.model('review', ReviewSchema);
