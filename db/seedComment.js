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
        video: "61086a6dac843451953053ee",
      },
      {
        username: 'WeebJonV',
        content: 'I can dig it!',
        video: "61086a6dac843451953053ef",
      },
      {
        username: 'WeebSquad',
        content: 'Its lit!',
        video: "61086a6dac843451953053f0",
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
