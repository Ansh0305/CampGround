const mongoose = require("mongoose");
const cities = require("./cities");
const { places, descriptors } = require("./seedhelper");
const Campground = require("../models/campground");

mongoose.connect("mongodb://localhost:27017/yelp-camp");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 20; i++) {
    const random20 = Math.floor(Math.random() * 20);
    const price = Math.floor(Math.random() * 3000) + 100;

    const camp = new Campground({
      author: "68b352c3afae67ad329a23ba",
      location: `${cities[random20].city}, ${cities[random20].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere doloribus nemo, dicta labore veritatis molestias quisquam dolorem cumque. Aspernatur perspiciatis et similique nostrum numquam nisi, tempore ut ratione aperiam deleniti cumque dolor blanditiis quas tenetur placeat itaque! Ad, dolorum exercitationem? Aliquam voluptatibus ullam alias unde?",
      price,
      geometry: {
        type: "Point",
        coordinates: [
          cities[random20].longitude,
          cities[random20].latitude,
        ]
      },
      images: [
        {
          url: "https://res.cloudinary.com/dxmkwgol8/image/upload/v1756816431/YelpCamp/xmjz81w2jfz6m9rofvpk.jpg",
          filename: "YelpCamp/xmjz81w2jfz6m9rofvpk",
        },
        {
          url: "https://res.cloudinary.com/dxmkwgol8/image/upload/v1756816432/YelpCamp/bwteedgfa8dcf0m7ingm.jpg",
          filename: "YelpCamp/bwteedgfa8dcf0m7ingm",
        },
      ],
    });
    await camp.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
