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

        return res.render('videos/show', context);
        
    } catch (error) {
        console.log (error);
        req.error = error;
        return next();
    }
});


// NOTE: UPDATE Route
// router.put('/:id', (req, res, next) => {
//     Video.findByIdAndUpdate(
//         req.params.id, 
//         {
//             $set: req.body,
//         },
//         {
//             new: true,
//         },
        
//         (error, updatedRecommend) => {
//             if (error) {
//                 console.log(error);
//                 req.error = error;
//                 return next();
//             };

//         return res.redirect('/video');
//     });
// });

router.put('/:id', async(req, res, next) => {
    try {
        const updatedVideo = await Video.findByIdAndUpdate(req.params.id,
            {
                $set: req.body,
            },
            {
                new: true,
            });

    } catch(error) {
        console.log (error);
        req.error = error;
        return next();

    }
});

module.exports = router;