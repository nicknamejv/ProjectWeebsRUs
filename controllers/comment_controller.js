const express = require('express');
const router = express.Router();

const { Comment, Video }  = require('../models');

// NOTE: INDEX Route
router.get('/', (req, res, next) => {
    Comment.find({}).populate('video').exec((error, allComment) => {
        if (error) {
            console.log(error);
            req.error = error;
            return next();
        };

        const context = {
            comments: allComment,
        };

        return res.render('comments/index', context);
    });
});

// NOTE: Create Route
router.post('/', (req, res, next) => {
    const comment = {
        ...req.body,
    };

    Comment.create(comment, (error, createdComment) => {
        if (error) {
            console.log(error);
            req.error = error;
            return next();
        };

        return res.redirect(`/${req.query.redirect}`);
    });
});

//NOTE: Update Route (presentational)
router.get('/:id/edit', (req, res, next) => {
    Comment.findById(req.params.id, (error, foundComment) => {
        if(error) {
            console.log(error);
            req.error = error;
            return next();
        };
        const context = {
            comment: foundComment,
        };
        return res.render('comments/edit', context)
    });
});

//NOTE: Update Route (functional)
router.put('/:id', (req, res, next ) => {
    Comment.findByIdAndUpdate(req.params.id, {$set: req.body,},{new: true},
        (error, updatedComment) => {
            if(error) {
                console.log(error);
                req.error = error;
                return next();
            };

            Video.find({comment: req.params.id}).populate('video').exec((error, allVideo) => {
                if(error) {
                    console.log(error);
                    req.error  = error;
                    return next();
                };
                const context = {
                    comment: updatedComment,
                    video: allVideo,
                };
                return res.redirect(`/video/:id`);

            });
        }
    );
});

module.exports = router;
