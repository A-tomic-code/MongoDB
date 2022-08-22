const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
    login: String,
    password: String,

});

module.exports = mongoose.model('user', UsersSchema, 'user');