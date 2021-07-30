const { Comment } = require("../models");

Comment.deleteMany({}, (error, deletedComments) => {
  if (error) {
    return console.log(error);
  }
  Comment.insertMany(
    [
      {
        username: 'Weebtlewis',
        content: 'That was dope',
        video: "610070c258165b5bf9fdd908",
      },
      {
        username: 'WeebJonV',
        content: 'I can dig it!',
        video: "610070c258165b5bf9fdd908",
      },
      {
        username: 'WeebSquad',
        content: 'Its lit!',
        video: "610070c258165b5bf9fdd908",
      },
    ],
     (error, createdComments) => {
      if (error) {
        return console.log(error);
      }
      console.log("=== Seed Complete ===");
      console.log(createdComments);
    }
  );
});
