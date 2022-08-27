const mongoose = require('mongoose');

const professionalSchema = mongoose.Schema(
    {
        first_name: String,
        last_name: String,
        age: Number,
        profesion: String
    }
)

module.exports = mongoose.model('professionals', professionalSchema, 'professionals');