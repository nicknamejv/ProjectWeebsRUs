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
        video: "6107416c907cbc23b8255c61",
      },
      {
        username: 'WeebJonV',
        content: 'I can dig it!',
        video: "6107416c907cbc23b8255c62",
      },
      {
        username: 'WeebSquad',
        content: 'Its lit!',
        video: "6107416c907cbc23b8255c63",
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
