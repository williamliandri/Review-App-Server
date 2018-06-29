var mongoose = require('mongoose');
var ReviewSchema = mongoose.Schema(
    {
        title: String,
        description: String,
        rating: Number
    }
);

module.exports = mongoose.model('reviews', ReviewSchema);