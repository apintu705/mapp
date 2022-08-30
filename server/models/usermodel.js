const mongoose = require('mongoose');

const userschema=new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
},{timestamps:true,versionKey:false})


module.exports=mongoose.model('users',userschema)