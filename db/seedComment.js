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
        video: "61083a3092bc4f22271458ad",
      },
      {
        username: 'WeebJonV',
        content: 'I can dig it!',
        video: "61083a3092bc4f22271458ae",
      },
      {
        username: 'WeebSquad',
        content: 'Its lit!',
        video: "61083a3092bc4f22271458af",
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
