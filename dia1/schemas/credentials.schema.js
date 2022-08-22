const mongoose = require('mongoose');

const credentialSchema = new mongoose.Schema({
    address: String,
    phone: String,
    email: String,
});

module.exports = mongoose.model('credentials', credentialSchema, 'credentials');