const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },

        content: {
            type: String,
            required: true,
        },

        video: {
            type: mongoose.Types.ObjectId,
            ref: 'Video',
            required: true,
        },
    },

    {
        timestamps: true,
    },
);

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;