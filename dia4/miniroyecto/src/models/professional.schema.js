const mongoose = require('mongoose');

const professionalSchema = mongoose.Schema(
    {
        first_name: String,
        last_name: String,
        age: Number,
        type: String
    }
)

module.exports = mongoose.model('professionals', professionalSchema, 'professionals');