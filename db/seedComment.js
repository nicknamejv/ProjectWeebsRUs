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
        video: "6109d85a97d8ac2e2641cbf9",
      },
      {
        username: 'WeebJonV',
        content: 'I can dig it!',
        video: "6109d85a97d8ac2e2641cbfa",
      },
      {
        username: 'WeebSquad',
        content: 'Its lit!',
        video: "6109d85a97d8ac2e2641cbfb",
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
