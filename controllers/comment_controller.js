const express = require('express');
const router = express.Router();

const { Comment }  = require('../models');

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

module.exports = router;
