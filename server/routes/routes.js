const express=require('express');
const { signupuser } = require('../controller/usercontroller');

const router=express.Router();

router.post("/signup",signupuser)


module.exports =router;

