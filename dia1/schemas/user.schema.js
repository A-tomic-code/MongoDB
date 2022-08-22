const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    role: String,
    verified: String
});

module.exports = mongoose.model('User', UserSchema);