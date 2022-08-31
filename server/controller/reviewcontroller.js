
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


exports.getReviews = async (request, response) => {
    try {
        const reviews = await Review.find({ postId: request.params.id });
        
        response.status(200).json(reviews);
    } catch (error) {
        response.status(500).json(error)
    }
}

exports.deleteReview = async (request, response) => {
    try {
        const review = await Review.findById(request.params.id);
        await review.delete()

        response.status(200).json('review deleted successfully');
    } catch (error) {
        response.status(500).json(error)
    }
}