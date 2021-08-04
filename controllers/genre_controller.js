const express = require('express');
const router = express.Router();

const { Video }  = require('../models');

// NOTE: INDEX Route - SLICE OF LIFE
// router.get('/sliceoflife', (req, res) => {
//     Video.find({ genre: 'Slice of Life' }, (error, allVideo) => {
//         const context = {
//             videos: allVideo,
//         };

//         return res.render('genres/index', context);
//     });
// });

router.get('/sliceoflife', async (req, res) => {
    try {
    const allVideo = await Video.find({ genre: 'Slice of Life' });
        const context = {
            videos: allVideo,
        };
        return res.render('genres/index', context);

    } catch(error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

// NOTE: INDEX Route - PSYCHOLOGICAL
// router.get('/psychological', (req, res) => {
//     Video.find({ genre: 'Psychological' }, (error, allVideo) => {
//         const context = {
//             videos: allVideo,
//         };

//         return res.render('genres/index', context);
//     });
// });

router.get('/psychological', async (req, res) => {
    try {
    const allVideo = await Video.find({ genre: 'Psychological' });

        const context = {
            videos: allVideo,
    };

    return res.render('genres/index', context);

    } catch(error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

// NOTE: INDEX Route - SLICE OF LIFE
// router.get('/journeytoanotherworld', (req, res) => {
//     Video.find({ genre: 'Journey to Another World' }, (error, allVideo) => {
//         const context = {
//             videos: allVideo,
//         };

//         return res.render('genres/index', context);
//     });
// });

router.get('/journeytoanotherworld', async (req, res) => {
    try {
    const allVideo = await Video.find({ genre: 'Journey to Another World' });

        const context = {
            videos: allVideo,
    }
    return res.render('genres/index', context);

    } catch(error) {
        console.log(error);
        req.error = error;
        return next();
    }
});
module.exports = router;
