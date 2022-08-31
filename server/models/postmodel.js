
const mongoose = require('mongoose')

const PostSchema =new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: false
    },
    username: {
        type: String,
        required: true
    },
    categories: {
        type: String,
        required: false   
    },
    createdDate: {
        type: Date
    }
},{timestamps:true,versionKey:false});


module.exports= mongoose.model('post', PostSchema);

