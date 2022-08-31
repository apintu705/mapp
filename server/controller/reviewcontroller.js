
const Review=require("../models/reviewmodel")

exports.newReview = async (req, res) => {
    try {
        const review = await new Review(req.body);
        review.save();

        res.status(200).json('review saved successfully');
    } catch (error) {
        res.status(500).json(error);
    }
}


exports.getReviews = async (req, res) => {
    try {
        const reviews = await Review.find({ postid: req.params.id });
        
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.deleteReview = async (req, res) => {
    try {
        const review = await Review.findById(req.params.id);
        await review.delete()

        res.status(200).json('review deleted successfully');
    } catch (error) {
        res.status(500).json(error)
    }
}