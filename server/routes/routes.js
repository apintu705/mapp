const express=require('express');
const { uploadimage ,getimage} = require('../controller/imagecontroller');

const { createpost, getAllPosts, getPost, updatePost, deletePost } = require('../controller/postcontroller');
const { newReview } = require('../controller/reviewcontroller');
const { signupuser, loginuser } = require('../controller/usercontroller');
const upload=require("../utils/upload");
const { isAuth } = require('../utils/utils');
const router=express.Router();


router.post("/signup",signupuser)
router.post("/login",loginuser)


// router.post("/file/upload",upload.single("file"),uploadimage)
// router.get("/file/:filename",getimage)


router.post("/create",isAuth,createpost)
router.get("/posts",isAuth,getAllPosts)
router.get("/posts/:id",isAuth,getPost)
router.put("/update/:id",isAuth,updatePost)
router.delete("/delete/:id",isAuth,deletePost)



router.post("/review/new",isAuth,newReview)

module.exports =router;

