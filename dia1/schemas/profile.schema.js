const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    name: String,
    surname: String,
    dateOfBirth: String,
    comments: String,
    rol: {
            type: String,
            enum: ['admin', 'user', 'teacher']
        }
});

profileSchema.pre('save', (next) => {

    if (this.rol != 'admin' && this.rol != 'user' && this.rol != 'teacher'){

        console.log('problema con el enum (no se pasa la validacion de datos)');
    }
    
    next()
})

module.exports = mongoose.model('profile', profileSchema, 'profile');