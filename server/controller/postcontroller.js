
const Post=require("../models/postmodel")


exports.createpost = async (req, res) => {
    try {
        const post = await new Post(req.body);
        post.save();

        res.status(200).json('Post saved successfully');
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.updatePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if (!post) {
            response.status(404).json({ msg: 'Post not found' })
        }
        
        await Post.findByIdAndUpdate( request.params.id, { $set: request.body })

        response.status(200).json('post updated successfully');
    } catch (error) {
        response.status(500).json(error);
    }
}

exports.deletePost = async (request, response) => {
    try {
        const post = await Post.findById(request.params.id);
        
        await post.delete()

        response.status(200).json('post deleted successfully');
    } catch (error) {
        response.status(500).json(error)
    }
}

exports.getPost = async (request, response) => {
    try {
        const post = await Post.findById(request.params.id);

        response.status(200).json(post);
    } catch (error) {
        response.status(500).json(error)
    }
}

exports.getAllPosts = async (req, res) => {
    
    let username = req.query.username;
    let category = req.query.category;
    let posts;
    try {
        if(username) 
            posts = await Post.find({ username: username });
        else if (category) 
            posts = await Post.find({ categories: category });
        else 
            posts = await Post.find();
            
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json(error)
    }
}