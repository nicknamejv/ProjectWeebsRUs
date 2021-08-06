const express = require('express');
const router = express.Router();

const { Comment, Video } = require('../models');

// NOTE: INDEX Route
router.get('/', async (req, res, next) => {
    try {
        const allComment = await Comment.find({}).populate('video');

        const context = {
            comments: allComment,
        };

        return res.render('comments/index', context);

    } catch (error) {
        console.log(error);
        return res.send(error);
        next();
    };
});

// NOTE: Create Route
router.post('/', async (req, res, next) => {
    try {
        const comment = {
            ...req.body,
        };

        const createdComment = await Comment.create(comment);

        return res.redirect(`/${req.query.redirect}`);

    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    };
});


//NOTE: Update Route (presentational)
router.get('/:id/edit', async (req, res, next) => {
    try {
        const foundComment = await Comment.findById(req.params.id);

        const context = {
            comment: foundComment,
        };

        return res.render('comments/edit', context);

    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    };
});

// NOTE: Update Route (functional)
router.put('/:id', async (req, res, next) => {
    try {
        const updatedComment = await Comment.findByIdAndUpdate(req.params.id,
            { $set: req.body },
            { new: true });

        const allVideo = await Video.find({ video: updatedComment.video }).populate('video');

        const context = {
            comment: updatedComment,
            video: allVideo,
        };

        return res.redirect(`/video/${updatedComment.video}`);

    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    };
});

// NOTE: DESTROY Route 
router.delete('/:id', async (req, res, next) => {
    try {
        const deletedComment = await Comment.findByIdAndDelete(req.params.id);

        return res.redirect(`/video/${deletedComment.video}`);

    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    };
});


module.exports = router;
