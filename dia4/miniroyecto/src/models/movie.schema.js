const mongoose = require('mongoose');

const professionalSchema = mongoose.Schema(
    {
        first_name: String,
        last_name: String,
        age: Number,
    }
)

const movieSchema = mongoose.Schema(
    {
        title : String,
        year: Number,
        genre: String,
        language: String,
        actor_names : [String],
        writer_names: [String],
        director_names: [String],
        team : [professionalSchema]
        
    }
)

module.exports = mongoose.model('movies', movieSchema, 'movies');