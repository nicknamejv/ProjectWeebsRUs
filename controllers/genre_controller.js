const express = require('express');
const router = express.Router();

const { Video }  = require('../models');

// NOTE: INDEX Route - SLICE OF LIFE
router.get('/sliceoflife', (req, res) => {
    Video.find({ genre: 'Slice of Life' }, (error, allVideo) => {
        const context = {
            videos: allVideo,
        };

        return res.render('genres/index', context);
    });
});

// NOTE: INDEX Route - PSYCHOLOGICAL
router.get('/psychological', (req, res) => {
    Video.find({ genre: 'Psychological' }, (error, allVideo) => {
        const context = {
            videos: allVideo,
        };

        return res.render('genres/index', context);
    });
});

// NOTE: INDEX Route - SLICE OF LIFE
router.get('/journeytoanotherworld', (req, res) => {
    Video.find({ genre: 'Journey to Another World' }, (error, allVideo) => {
        const context = {
            videos: allVideo,
        };

        return res.render('genres/index', context);
    });
});

module.exports = router;