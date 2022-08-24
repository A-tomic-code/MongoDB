
const mongoose = require('mongoose');
const MarkSchema = require('./shemas/Mark.schema');

const url = "mongodb+srv://korbyvk:alohomora@cluster0.twdkbdw.mongodb.net/school";

mongoose.connect(url,
    {
        useNewUrlParser: false,
        useUnifiedTopology: false
    }
);

function check(err, ress){
    err ? console.log(err) : console.log(res) ;
}

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
MarkSchema.aggregate(
    [   
        {
            $match :
                {
                    date : {'$gt' : new Date('2022,08,01')}
                }

        },
        {
            $group : 
                {
                    '_id' : [ 
                                {'media' : {'$avg' : '$mark'}},
                                 '$student_first_name' 
                            ]
                }
        }

    ]
)
.then( (result) => {
   console.log('media >> ' + result._id + ' Alumno >> ')
})

function detalles(msg, result){
    console.log(msg);
    console.log(result);
    console.log('\n');
}