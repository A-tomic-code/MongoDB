const mongoose = require('mongoose');

const TeacherSchema = new mongoose.Schema(
    {
        teacher_first_name: String,
        teacher_last_name: String,
    }
)
const MarkSchema = new mongoose.Schema(
    {
        date: Date,
        mark: Number,
        student_first_name: String,
        student_last_name: String,
        group_name: String,
        subject_name: String,
        teachers: [TeacherSchema]
    }
)

module.exports = mongoose.model('Marks', MarkSchema,'Marks');