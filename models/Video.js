const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },

        videoImage: {
            type: String,
            required: true,
        },

        description: {
            type: String, 
            required: true,
        },

        genre: {
            type: String,
            required: true,
        },

        videoLink: {
            type: String,
            required: true,
        },

        isRecommended: {
            type: Boolean,
            default: false,
        },
    },

    {
        timestamps: true,
    },
);

const Video = mongoose.model('Video', videoSchema);

module.exports = Video;