
const mongoose = require('mongoose');
const cities = require('./cities')
const { places, descriptors } = require('./seedHelpers')
const Campground = require('../models/campground')

mongoose.connect('mongodb://localhost:27017/tent');

const db = mongoose.connection;
db.on('error', console.error.bind(console, "database connection error:"));
db.once("open", () => {
    console.log("* DATABASE CONNECTED *");
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 100; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const city = cities[i]; // Access a specific city object

        const camp = new Campground({
            author: '65e6677658004ddc088f27e5',
            location: `${city.city},${city.state}`, // Use city instead of cities
            title: `${city.name}`, // Use city instead of cities
            description: `${city.description}`, // Use city instead of cities
            price: 1700,
            geometry: {
                type: "Point",
                coordinates: [
                    city.longitude, // Use city instead of cities
                    city.latitude, // Use city instead of cities
                ]
            },
            images: [
                {
                    url: 'https://res.cloudinary.com/dniz7rbgx/image/upload/v1709679922/tent/mkmrvlheb4le0vjdsb3v.jpg',
                    filename: 'tent/mkmrvlheb4le0vjdsb3v',
                }
            ]
        });
        await camp.save();
    }
};


seedDB().then(() => {
    mongoose.connection.close()
})