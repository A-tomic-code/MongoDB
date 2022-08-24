const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema(
    {
        first_name: String,
        last_name: String,
    }
);

const subjectSchema = new mongoose.Schema(
    {
        title: String,
        teacher: [teacherSchema]
    }
);


const markSchema = new mongoose.Schema(
    {
        mark: String,
        date: Date,
        subject: subjectSchema
    }
);


const studentSchema = new mongoose.Schema(
    {
        first_name: String,
        last_name: String,
        mark: [markSchema]
    }   
)

//! EL ESTUDIANTE TIENE NOTAS, QUE TIENEN UNA ASIGNATURA, 
//! LA CUAL ES IMPARTIDA POR UNO O VARIOS PROFESOR



module.exports = mongoose.model('students', studentSchema, 'students');