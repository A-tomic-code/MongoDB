const mongoose = require('mongoose');

const PhotoSchema = new mongoose.Schema({
    username: String,
    title: String,
    URL: String,
    description: String
})

module.exports = mongoose.model('photos', PhotoSchema, 'photos');
