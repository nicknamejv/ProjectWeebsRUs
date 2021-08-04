const express = require('express');
const router = express.Router();

const { Video, Comment } = require('../models');

// NOTE: INDEX Route
router.get('/', async (req, res) => {
    try {
        const allVideo = await Video.find({});

        const context = {
            videos: allVideo,
        };

        return res.render('videos/index', context);

    } catch(error) {
        console.log (error);
        req.error = error;
        return next();
    };
});

// NOTE: SHOW Route
router.get('/:id', async (req, res, next) => {
    try {
        const foundVideo = await Video.findById(req.params.id);
        const allComment = await Comment.find({ video: req.params.id }).populate('video');

        const context = {
            video: foundVideo,
            comments: allComment,
        };

        console.log(`${allComment} ========`);

        return res.render('videos/show', context);
        
    } catch (error) {
        console.log (error);
        req.error = error;
        return next();
    }
});


// NOTE: UPDATE Route

router.put('/:id', async(req, res, next) => {
    try {
        const updatedVideo = await Video.findByIdAndUpdate(req.params.id,
            {
                $set: req.body,
            },
            {
                new: true,
            });

    } catch (error) {
        console.log (error);
        req.error = error;
        return next();
    }
});

module.exports = router;