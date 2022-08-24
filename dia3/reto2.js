
const mongoose = require('mongoose');
const MarkSchema = require('./shemas/Mark.schema');

const url = "mongodb+srv://korbyvk:alohomora@cluster0.twdkbdw.mongodb.net/school";

mongoose.connect(url,
    {
        useNewUrlParser: false,
        useUnifiedTopology: false
    }
);

function check(err, ress) {
    err ? console.log(err) : console.log(res);
}
//! -------------------------------------------------------------------------------------------------------

// MarkSchema.aggregate(
//     [
//         {
//             $match : 
//                 {
//                     $or : 
//                         [
//                             {'mark' : {'$gt' : 8} },
//                             {'date' : {'$lt' : new Date('2022,08,01')}} 
//                         ]
//                 }
//         }
//     ]
// )
// .then( (result) => {
//     detalles('NOTA > 8 || FECHA > 1 ANYO', result)
// })

//! -------------------------------------------------------------------------------------------------------

// MarkSchema.aggregate(
//     [   
//         {
//             $match :
//                 {
//                     date : {'$gt' : new Date('2022,08,01')}
//                 }

//         },
//         {
//             $group : 
//                 {
//                     '_id' : [ 
//                                 {'$avg' : '$mark'},
//                                  '$subject_name' 
//                             ]
//                 }
//         }

//     ]
// )
// .then( (result) => {
//     detalles('MEDIA ULT ANYO / ASIGNATURA', result)
// })

//! -------------------------------------------------------------------------------------------------------

// MarkSchema.aggregate(
//     [   
//         {
//             $match :
//                 {
//                     date : {'$gt' : new Date('2022,08,01')}
//                 }

//         },
//         {
//             $group : 
//                 {
//                     '_id' : 
//                         {
//                             'alumno' : '$student_first_name',
//                             'media' : {'$avg' : '$mark'},
//                         }
//                 }
//         }

//     ]
// )
// .then( (result) => {
//     detalles('MEDIA ULT ANYO / ALUMNO', result)
// })

//! -------------------------------------------------------------------------------------------------------

MarkSchema.aggregate(
    [
        {
            $unwind : '$teachers'
        },
        {

            $match:
            {
                "teachers.teacher_first_name": 'Menchu'
            }
        },
        {
            $group : 
                {  
                    '_id' : 
                        {
                            'Alumno' : '$student_first_name',
                            'Asignatura': '$subject_name',
                            'Profesor' : '$teachers.teacher_first_name'
                        }
         
                }
        }
        

    ]
)
.then( (result) => {
    detalles('ASIGNATURAS POR ALUMNO && PROFESOR == MENCHU', result)
})


function detalles(msg, result) {
    console.log(msg);
    console.log(result);
    console.log('\n');
}