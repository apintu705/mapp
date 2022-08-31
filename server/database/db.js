const mongoose = require('mongoose');
require("dotenv").config();

exports.connect=async()=>{
    const url=process.env.MONGODB
    try{
       await  mongoose.connect(url,{
            useNewUrlParser:true
        });
        console.log("db connected successfully")
    }
    catch(error){
        console.log("error connecting while connecting with db",error)
    }
}