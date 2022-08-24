const mongoose = require('mongoose');
const MarkSchema = require('./shemas/Mark.schema');

const url = "mongodb+srv://korbyvk:alohomora@cluster0.twdkbdw.mongodb.net/school";

mongoose.connect(url,
    {
        useNewUrlParser: false,
        useUnifiedTopology: false
    }
);

function check(err, res){
    err ? console.log(err) : console.log(res) ;
}

let marks = [];

let mark1 = 
    {
        date : new Date(),
        mark : Number( (Math.random() * 10).toFixed() ),
        student_first_name: 'Daniel',
        student_last_name: 'Vazquez',
        group_name: 'verano',
        subject_name: 'mongo',
        teachers: 
                    [
                        {
                            teacher_first_name: 'Daniel',
                            teacher_last_name: 'Vera',
                        }
                    ]

    };

    marks.push(mark1);

    let mark2 = 
    {
        date : new Date(),
        mark : Number( (Math.random() * 10).toFixed() ),
        student_first_name: 'Daniel',
        student_last_name: 'Vazquez',
        group_name: 'verano',
        subject_name: 'maquetacion',
        teachers: 
                    [
                        {
                            teacher_first_name: 'Menchu',
                            teacher_last_name: 'Martin',
                        }
                    ]

    };
    
    marks.push(mark2);
    
    let mark3 = 
    {
        date : new Date(),
        mark : Number( (Math.random() * 10).toFixed() ),
        student_first_name: 'Diego',
        student_last_name: 'Jimenez',
        group_name: 'verano',
        subject_name: 'mongo',
        teachers: 
                    [
                        {
                            teacher_first_name: 'Daniel',
                            teacher_last_name: 'Vera',
                        }
                    ]

    };

    marks.push(mark3);

    let mark4 = 
    {
        date : new Date(),
        mark : Number( (Math.random() * 10).toFixed() ),
        student_first_name: 'Diego',
        student_last_name: 'Jimenez',
        group_name: 'verano',
        subject_name: 'maquetacion',
        teachers: 
                    [
                        {
                            teacher_first_name: 'Menchu',
                            teacher_last_name: 'Martin',
                        }
                    ]

    };
    
    marks.push(mark4);

    let mark5 = 
    {
        date : new Date(),
        mark : Number( (Math.random() * 10).toFixed() ),
        student_first_name: 'Karen',
        student_last_name: 'Uzkaitegui',
        group_name: 'verano',
        subject_name: 'mongo',
        teachers: 
                    [
                        {
                            teacher_first_name: 'Daniel',
                            teacher_last_name: 'Vera',
                        }
                    ]

    };

    marks.push(mark5);

    let mark6 = 
    {
        date : new Date(),
        mark : Number( (Math.random() * 10).toFixed() ),
        student_first_name: 'Karen',
        student_last_name: 'Uzkaitegui',
        group_name: 'verano',
        subject_name: 'maquetacion',
        teachers: 
                    [
                        {
                            teacher_first_name: 'Menchu',
                            teacher_last_name: 'Martin',
                        }
                    ]

    };
    
    marks.push(mark6);
    
    let mark7 = 
    {
        date : new Date(),
        mark : Number( (Math.random() * 10).toFixed() ),
        student_first_name: 'Karen',
        student_last_name: 'Uzkaitegui',
        group_name: 'verano',
        subject_name: 'mongo',
        teachers: 
                    [
                        {
                            teacher_first_name: 'Daniel',
                            teacher_last_name: 'Vera',
                        }
                    ]

    };

    marks.push(mark7);

    let mark8 = 
    {
        date : new Date(),
        mark : Number( (Math.random() * 10).toFixed() ),
        student_first_name: 'Karen',
        student_last_name: 'Uzkaitegui',
        group_name: 'verano',
        subject_name: 'maquetacion',
        teachers: 
                    [
                        {
                            teacher_first_name: 'Menchu',
                            teacher_last_name: 'Martin',
                        }
                    ]

    };

    marks.push(mark8);
    
    let mark9 = 
    {
        date : new Date(),
        mark : Number( (Math.random() * 10).toFixed() ),
        student_first_name: 'Lidia',
        student_last_name: 'Cotozal',
        group_name: 'primavera',
        subject_name: 'mongo',
        teachers: 
                    [
                        {
                            teacher_first_name: 'Daniel',
                            teacher_last_name: 'Vera',
                        }
                    ]

    };

    marks.push(mark9);

    let mark10 = 
    {
        date : new Date(),
        mark : Number( (Math.random() * 10).toFixed() ),
        student_first_name: 'Lidia',
        student_last_name: 'Cotozal',
        group_name: 'primavera',
        subject_name: 'maquetacion',
        teachers: 
                    [
                        {
                            teacher_first_name: 'Menchu',
                            teacher_last_name: 'Martin',
                        }
                    ]

    };

    marks.push(mark10);

    // MarkSchema.insertMany(marks, check) //! ----> NO DESCOMENTAR NUNCA <-----


    MarkSchema.aggregate(
        [
            {
                $match: {subject_name: 'maquetacion'}
            },

            {
                $group: 
                    {
                        '_id': null, 
                        'Nota media' : {'$avg' : '$mark'}
                    }
            },

            {
                $project:
                    {
                        '_id': 0
                    }
            }
        ]
    )
    .then( (result) => {
        detalles('NOTA MEDIA DE MAQUTACION', result)
    })

    MarkSchema.aggregate(
        [
            {
                $count: 'student_first_name'
            },

            {
                $project: {'Total alumnos: ' : '$student_first_name'}
            }
        ]
    )
    .then( (result) => {
        detalles('TOTAL DE ALUMNOS', result)
    })


    MarkSchema.aggregate(
        [
            {
                $project : 
                    {
                        '_id' : 0,
                        'Nombre' : '$student_first_name',
                        'Apellido' : '$student_last_name',
                    }
            }
        ]
    )
    .then( (result) => {
        detalles('ALUMNOS CON NOMBRE Y APELLIDO', result)

    })
    
    MarkSchema.aggregate(
        [

            {
                $project : 
                    {
                        '_id' : 0,
                    }
            },

            {
                $unwind : '$teachers'
            }
        ]
    )
    .then( (result) => {
        detalles('PROFESORES CON NOMBRE Y APELLIDO', result)
    })

    MarkSchema.aggregate(
        [
            
            {
                $group :
                {
                    '_id' : {'Grupo': '$group_name'},
                    'Cantidad' : {'$sum' : 1}
                    
                }
            },

            {
                $sort : 
                    {
                        'Grupo' : -1
                    }
            }
        ]
    )
    .then( (result) => {
        detalles('ALUMNOS POR GRUPO != ALFABETO', result)
    })

    MarkSchema.aggregate(
        [
            [
                {
                    $group : 
                        {
                            '_id' : '$subject_name',
                            'nota_media' : {$avg : '$mark'}
                        }
                },

                {
                    $match :
                        {
                            'nota_media' : { $gt : 5}
                        }
                },

                {
                    $sort :
                        {
                            'nota_media': -1
                        }
                },

                {
                    $limit : 5
                }
            ]
        ]
    )
    .then( (result) => {
        detalles('TOP 5 ASIGNATURAS CON MEDIA > 5', result)
    })

    MarkSchema.aggregate(
        [   
            {
                $unwind: '$teachers'
            },

            {
                $group : 
                    {
                        '_id' : ['$teachers.teacher_first_name', '$subject_name' ],
                        'num_veces' : {$sum : 1}
                    }
            }
        ]
    )
    .then( (result) => {
        detalles('NUM PROFESORES / ASIGNATURA', result)
    })
    function detalles(msg, result){
        console.log(msg);
        console.log(result);
        console.log('\n');
    }

