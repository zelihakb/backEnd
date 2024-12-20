
const database = "mekanbul";
use(database);

db.venues.updateOne(
  { name: "Barida Cam Kafe" },
  {
    $push: {
      comments: {
        $each: [
          {
            _id: ObjectId(),
            author: "ahmet",
            rating: 5,
            text: "Kahveler harikaaa",
            date: new Date(),
          },
          {
            _id: ObjectId(),
            author: "zelia",
            rating: 1,
            text: "beğenmedim",
            date: new Date(),
          },
          {
            _id: ObjectId(),
            author: "ali veli",
            rating: 3,
            text: "idare eder",
            date: new Date(),
          },
        ],
      },
    },
  }
);

