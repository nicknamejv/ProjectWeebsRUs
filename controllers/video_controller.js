const express = require('express');
const router = express.Router();

const { Video } = require('../models');

// NOTE: SHOW route
router.get('video/:id', (req, res, next) => {
    Video.findById(req.params.id, (error, foundVideo) => {
        if (error) {
            console.log(error);
            req.error = error;
            return next();
        };

        const context = {
            videos: foundVideo,
        };
  
        return res.render('videos/index', context);
      });
    });
  