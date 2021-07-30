const { Video } = require("../models");

Video.deleteMany({}, (error, deletedVideos) => {
  if (error) {
    return console.log(error);
  }
  Video.insertMany(
    [
      {
        title: 'Death Note',
        videoImage: 'https://m.media-amazon.com/images/I/716ASj7z2GL._AC_SL1000_.jpg',
        description: 'A psychological thriller about a teenager who got bored',
        genre: 'Psychological',
        videoLink: 'https://youtu.be/V26rLTwuRqE',
        isRecommended: true,
      },
      {
        title: 'Overlord',
        videoImage: 'https://static3.srcdn.com/wordpress/wp-content/uploads/2021/07/Overlord-1.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5',
        description: 'Satoru gets stuck in a VRMMO and is the taking over',
        genre: 'Journey to Another World',
        videoLink: 'https://youtu.be/T7l-JbtU7M0',
        isRecommended: true,
      },
      {
        title: 'Clannad',
        videoImage: 'https://m.media-amazon.com/images/M/MV5BN2VmM2NmMGUtOGQ2OC00Y2ZjLTljNTctYjhmMDJjZjM1NTY3XkEyXkFqcGdeQXVyNDgyODgxNjE@._V1_.jpg',
        description: 'Follow the life of Tomoya Okazaki who is a third year student slackin in school',
        genre: 'Slice of Life',
        videoLink: 'https://youtu.be/TVZCU4qB8aQ',
        isRecommended: false,
      },
    ],
      (error, createdVideo) => {
      if (error) {
        return console.log(error);
      }
      console.log("=== Seed Complete ===");
      console.log(createdVideo);
    }
  );
});