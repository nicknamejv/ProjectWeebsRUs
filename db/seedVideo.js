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
        videoLink: 'https://www.youtube.com/embed/V26rLTwuRqE',
        isRecommended: false,
        comment: [],
      },
      {
        title: 'The Promised Neverland',
        videoImage: 'https://m.media-amazon.com/images/M/MV5BMTYwYjYyZDgtMTQ3My00YTI4LThmZTUtZmU1MjllOWRlOTdhXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_FMjpg_UX1000_.jpg',
        description: 'Follow the life of 3 orphans in a strange orphanage',
        genre: 'Psychological',
        videoLink: 'https://www.youtube.com/embed/eBwApg_nAvY',
        isRecommended: false,
        comment: [],
      },
      {
        title: 'Code Geass',
        videoImage: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Code_Geass_R1_box_set_cover.jpg/220px-Code_Geass_R1_box_set_cover.jpg',
        description: 'A teenage with the power to make anyone follow his orders',
        genre: 'Psychological',
        videoLink: 'https://www.youtube.com/embed/v-AGjx0N24U',
        isRecommended: false,
        comment: [],
      },
      {
        title: 'Parasyte -the maxim-',
        videoImage: 'https://m.media-amazon.com/images/M/MV5BZTViMTZlMjgtNjVmZC00NjEzLWJlN2QtMjQ4ZTYxNzBiZmMyXkEyXkFqcGdeQXVyNjc2NjA5MTU@._V1_FMjpg_UX1000_.jpg',
        description: 'Working together with an alien parasite to save the world',
        genre: 'Psychological',
        videoLink: 'https://www.youtube.com/embed/9-Kpcc5koXA',
        isRecommended: false,
        comment: [],
      },
      {
        title: 'Tokyo Ghoul',
        videoImage: 'https://m.media-amazon.com/images/M/MV5BN2E2OTgzODktMjBhYy00MjJjLWI0OTgtNGYxOGNhMWMxOWE4XkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg',
        description: 'Ken Kaneki becomes a ghoul who protects people from other ghouls',
        genre: 'Psychological',
        videoLink: 'https://www.youtube.com/embed/ETHpMMV8rJU',
        isRecommended: false,
        comment: [],
      },
      {
        title: 'Sword Art Online',
        videoImage: 'https://m.media-amazon.com/images/M/MV5BYjY4MDU2YjMtNzY1MC00ODg1LWIwMzYtMWE5YTA3YTI4ZjMxXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg',
        description: 'Kirito is just trying to survive while stuck in a VR game',
        genre: 'Journey to Another World',
        videoLink: 'https://www.youtube.com/embed/ALCLCvNJ7iY',
        isRecommended: false,
        comment: [],
      },
      {
        title: 'Overlord',
        videoImage: 'https://m.media-amazon.com/images/M/MV5BOTFlY2NkOWItNTI3Yy00NDA5LTkzOTQtZGVmNDJlMzM4OGJlXkEyXkFqcGdeQXVyNDQxNjcxNQ@@._V1_FMjpg_UX1000_.jpg',
        description: 'Satoru gets stuck in a VRMMO and is taking over',
        genre: 'Journey to Another World',
        videoLink: 'https://www.youtube.com/embed/T7l-JbtU7M0',
        isRecommended: false,
        comment: [],
      },
      {
        title: 'Re: Zero',
        videoImage: 'https://m.media-amazon.com/images/M/MV5BOTNkMGJjYWQtZWNmNC00YzczLThiYTgtZmE4NzFmMDM2YmEzXkEyXkFqcGdeQXVyMTI3NDQ4MTM5._V1_.jpg',
        description: 'He thought he died, but then he came back to life as if at a checkpoint in a game',
        genre: 'Journey to Another World',
        videoLink: 'https://www.youtube.com/embed/Slz_rahWp6Y',
        isRecommended: true,
        comment: [],
      },
      {
        title: 'The Rising of the Shield Hero',
        videoImage: 'https://m.media-amazon.com/images/M/MV5BNTQ1ZGVjODAtNWYzZS00ZmZiLWExYjEtNmM1MjI2OTk1YWY3XkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg',
        description: 'Traveling through a new world as the shield hero can be exhausting',
        genre: 'Journey to Another World',
        videoLink: 'https://www.youtube.com/embed/rKnyi3TRznA',
        isRecommended: true,
        comment: [],
      },
      {
        title: 'That Time I Got Reincarnated as a Slime',
        videoImage: 'https://m.media-amazon.com/images/M/MV5BM2M2NDIzOTItZDA1Yy00M2Q4LTk3ZjctZjZmZjUyZWMxM2YyXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_FMjpg_UX1000_.jpg',
        description: 'A slime the rules the world!',
        genre: 'Journey to Another World',
        videoLink: 'https://www.youtube.com/embed/uOzwqb74K34',
        isRecommended: false,
        comment: [],
      },
      {
        title: 'Clannad',
        videoImage: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bb47b6da-c15f-4ed7-94e3-b185c347b132/d4ouvdb-4e2ccd20-c0d2-49a8-91ca-e64094039cea.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JiNDdiNmRhLWMxNWYtNGVkNy05NGUzLWIxODVjMzQ3YjEzMlwvZDRvdXZkYi00ZTJjY2QyMC1jMGQyLTQ5YTgtOTFjYS1lNjQwOTQwMzljZWEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zrQ58MAHAffIZzkPa7iUIRCEIFFhRgPPe-U0pBxAGHE',
        description: 'Follow the life of Tomoya Okazaki who is a third year student slackin in school',
        genre: 'Slice of Life',
        videoLink: 'https://www.youtube.com/embed/TVZCU4qB8aQ',
        isRecommended: false,
        comment: [],
      },
      {
        title: 'Violet Evergarden',
        videoImage: 'https://m.media-amazon.com/images/M/MV5BZmUzMThjOTItZGY4ZS00ODcwLTliNTMtYjVkM2JmY2QxNmRhXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_FMjpg_UX1000_.jpg',
        description: 'Follow the life of a young female ex sodier who gets a job as a writer',
        genre: 'Slice of Life',
        videoLink: 'https://www.youtube.com/embed/UZEOpfelkxQ',
        isRecommended: false,
        comment: [],
      },
      {
        title: 'Hyouka',
        videoImage: 'https://m.media-amazon.com/images/M/MV5BMTcwNjUwNDctNzI5Ni00MDg1LWE0YTEtODRhYTMxZTA5OGRjXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_FMjpg_UX1000_.jpg',
        description: 'Follow the life of Oreki Hotarou and his life in the Classic Literature Club',
        genre: 'Slice of Life',
        videoLink: 'https://www.youtube.com/embed/KbIUra_o2wc',
        isRecommended: false,
        comment: [],
      },
      {
        title: 'Your Lie In April',
        videoImage: 'https://m.media-amazon.com/images/M/MV5BYThlNWY5ZDgtYTIxNC00ZjdiLWJmNGUtMDFjMDlmZTAzOWFiXkEyXkFqcGdeQXVyNTM4NzAzNjc@._V1_.jpg',
        description: 'A piano prodigy has his world crumble after his mothers death but after meeting a girl who plays violin his life is given new meaning',
        genre: 'Slice of Life',
        videoLink: 'https://www.youtube.com/embed/3aL0gDZtFbE',
        isRecommended: false,
        comment: [],
      },
      {
        title: 'Only Yesterday (1991)',
        videoImage: 'https://i.pinimg.com/originals/dc/bd/49/dcbd49a9afbc73c91eab0ba1fcb4a952.jpg',
        description: 'A woman traverses the countryside while remembering her childhood in Tokyo',
        genre: 'Slice of Life',
        videoLink: 'https://www.youtube.com/embed/x0ZrjocXVJ4',
        isRecommended: false,
        comment: [],
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