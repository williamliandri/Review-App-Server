const db = require('../models/database');
const mongoose = require('mongoose');
const Review = mongoose.model('reviews');

module.exports.fetchReview = function(req, res) {

    console.log("fetching reviews");
 
    // Use mongoose to get all reviews in the database
    Review.find(function(err, reviews) {
 
        // If there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }
        else {
            console.log(reviews);
            res.json(reviews); // Return all reviews in JSON format
        }
    });
};

module.exports.createReview = function(req, res) {
    console.log("creating review");
 
    // Create a review, information comes from request from Ionic
    Review.create({
        title : req.body.title,
        description : req.body.description,
        rating: req.body.rating,
        done : false
    }, function(err, review) {
        if (err)
            res.send(err);

        // Get and return all the reviews after you create another
        Review.find(function(err, reviews) {
            if (err)
                res.send(err)
            res.json(reviews);
        });
    });
};

module.exports.deleteReview = function(req, res) {
    Review.findOneAndRemove({_id: req.params.review_id}, (err) => {
        if (err){
            console.log("Error in removing the review.");
        }
        else {
            console.log("Success removing the review.");
        }
    });
};

module.exports.showHome = function(req, res){
    res.render('home');
}


