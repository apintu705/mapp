const express=require('express');
const { signupuser, loginuser } = require('../controller/usercontroller');

const router=express.Router();

router.post("/signup",signupuser)
router.post("/login",loginuser)


module.exports =router;

