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
        video: "61083fc45eeab42598ce04a3",
      },
      {
        username: 'WeebJonV',
        content: 'I can dig it!',
        video: "61083fc45eeab42598ce04a4",
      },
      {
        username: 'WeebSquad',
        content: 'Its lit!',
        video: "61083fc45eeab42598ce04a5",
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
