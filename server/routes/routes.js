const express=require('express');


const { createpost, getAllPosts, getPost, updatePost, deletePost } = require('../controller/postcontroller');
const { newReview, getReviews, deleteReview } = require('../controller/reviewcontroller');
const { signupuser, loginuser } = require('../controller/usercontroller');

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
router.get("/reviews/:id",isAuth,getReviews)
router.delete("/review/delete/:id",isAuth,deleteReview)

module.exports =router;

