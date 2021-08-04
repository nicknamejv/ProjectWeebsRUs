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
// router.get('/:id', (req, res, next) => {
//     Video.findById(req.params.id, (error, foundVideo) => {
//         if (error) {
//             console.log(error);
//             req.error = error;
//             return next();
//         };

//         Comment.find({ video: req.params.id }).populate('video').exec((error, allComment) => {
//             if (error) {
//                 console.log(error);
//                 req.error = error;
//                 return next();
//             };

//             const context = {
//                 video: foundVideo,
//                 comments: allComment,
//             };

//             return res.render('videos/show', context);
//         });
//     });
// });

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
router.put('/:id', (req, res, next) => {
    Video.findByIdAndUpdate(
        req.params.id, 
        {
            $set: req.body,
        },
        {
            new: true,
        },
        
        (error, updatedRecommend) => {
            if (error) {
                console.log(error);
                req.error = error;
                return next();
            };

        return res.redirect('/video');
    });
});

module.exports = router;