const express = require('express');
const router = express.Router();

const { Video }  = require('../models');

// NOTE: INDEX Route
router.get('/', (req, res) => {
    Video.find({}, (error, allVideo) => {
        const context = {
            videos: allVideo,
        };

        return res.render('genres/index', context);
    });
});

// NOTE: SHOW Route
router.get('/:genre', (req, res, next) => {
    Video.find({ genre: req.params.genre }, (error, foundVideo) => {
        if (error) {
            console.log(error);
            req.error = error;
            return next();
        }

            return res.render('genres/show', context);
        
    });
});

module.exports = router;