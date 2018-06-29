const express = require('express');
const router = express.Router();
const control = require('../controllers/maincontroller');

router.get('/api/reviews', control.fetchReview);

router.post('/api/reviews', control.createReview);

router.delete('/api/reviews/:review_id', control.deleteReview);

router.get('/', control.showHome);

module.exports = router;