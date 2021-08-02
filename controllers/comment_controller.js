const express = require('express');
const router = express.Router();

const { Comment, Video }  = require('../models');

router.get('/', (req, res) => {
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

module.exports = router;
