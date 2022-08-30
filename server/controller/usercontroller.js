const User=require("../models/usermodel")
const bcrypt = require('bcrypt');

exports.signupuser=async(req,res,next)=>{
    try{
        const user=req.body;
        
        const hashedpassword=await bcrypt.hash(user.password,10);
        const newuser=new User({
            name:user.name, 
            username:user.username, 
            password:hashedpassword
        });
        await newuser.save();
        return res.status(200).json({msg:"signup successfull"})
    }
    catch(error){
        return res.status(500).json({msg:"signup unsuccessfull"})
    }
}