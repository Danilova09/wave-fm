const mongoose = require('mongoose');
const config = require("./config");
const Artist = require("./models/Artist");
const Album = require("./models/Album");

const run = async () => {
    await mongoose.connect(config.mongo.db, config.mongo.options);

    const collections = await mongoose.connection.db.listCollections().toArray();

    for (const coll of collections) {
        await mongoose.connection.db.dropCollection(coll.name);
    }

    const [Kris, John, Jason] = await Artist.create({
        name: 'Kris',
        info: 'Info about Kris',
        image: 'image.jpg'
    }, {
        name: 'John',
        info: 'Info about John',
        image: 'image.jpg'
    }, {
        name: 'Jason',
        info: 'Info about Jason',
        image: 'image.jpg'
    });

    await Album.create({
        artist: Kris,
        title: 'Kris`s album',
        releaseDate: '2021',
        image: 'image.jpg'
    }, {
        artist: John,
        title: 'John`s album',
        releaseDate: '2021',
        image: 'image.jpg'
    }, {
        artist: Jason,
        title: 'Jason`s album',
        releaseDate: '2021',
        image: 'image.jpg'
    });

    await mongoose.connection.close();
};

run().catch(e => console.error(e));