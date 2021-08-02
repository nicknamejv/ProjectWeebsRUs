const express = require('express');
const router = express.Router();

const { Video, Comment } = require('../models');

// NOTE: INDEX Route
router.get('/', (req, res) => {
    Video.find({}, (error, allVideo) => {
        const context = {
            videos: allVideo,
        };

        return res.render('videos/index', context);
    });
});

// NOTE: SHOW Route
router.get('/:id', (req, res, next) => {
    Video.findById(req.params.id, (error, foundVideo) => {
        if (error) {
            console.log(error);
            req.error = error;
            return next();
        };

        Comment.find({ video: req.params.id }).populate('video').exec((error, allComment) => {
            if (error) {
                console.log(error);
                req.error = error;
                return next();
            };

            const context = {
                videos: foundVideo,
                comments: allComment,
            };

            return res.render('videos/show', context);
        });
    });
});

module.exports = router;