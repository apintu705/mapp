const User=require("../models/usermodel")
const bcrypt = require('bcrypt');
const { generateToken } = require('../utils/utils');
const jwt =require("jsonwebtoken");
require("dotenv").config();



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

exports.loginuser=async(req, res, next) =>{
    
    const {username,password} = req.body;

    try{
        const user=await User.findOne({username:username});

        if(user){
            const validity=await bcrypt.compare(password,user.password);

            if(!validity){
                res.status(400).json({msg:"Wrong Password"})
            }else{
                const token= generateToken(user)

                return res.status(200).json({name:user.name,id:user._id,username:user.username,token})
            }
        }
        else{
            res.status(404).json({msg:"user not found"})
        }
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
}