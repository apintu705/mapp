const mongoose = require('mongoose');

const tokenschema=new mongoose.Schema({
    token:{
        type:String, 
        required:true
    }
})

module.exports=mongoose.model("token",tokenschema)