// Create Database
const mongoose = require('mongoose');

mongoose.connect('mongodb://test123:test123@ds121331.mlab.com:21331/reviewappdatabase', function(err){
    if(!err) {
        console.log('Connected to mongo');
    } else {
        console.log('Failed to connect to mongo');
    }
});

require('./review.js');


