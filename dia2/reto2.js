const mongoose = require('mongoose');

const studentSchema = require('./schemas/student.schema')

const url =
  "mongodb+srv://korbyvk:alohomora@cluster0.twdkbdw.mongodb.net/school";

mongoose.connect(url, {
  useNewUrlParser: false,
  useUnifiedTopology: false,
});

function check (err, res){
  err ? console.log(err) : console.log(res);
}

// studentSchema.create(
//   {
//     first_name: 'Daniel',
//     last_name: 'Vazquez',
//     mark: 
//       [
//         {
//           mark: 8,
//           date: new Date(),
//           subject: 
//               {
//                 title: 'maquetacion',
//                 teacher:
//                   [
//                     {
//                       first_name: 'Menchu',
//                       last_name: 'Martin'
//                     }
//                   ]
//               }
//         }
//       ]
//   }, check)

// studentSchema.create(
//   {
//     first_name: 'Diego',
//     last_name: 'Jimenez',
//     mark: 
//       [
//         {
//           mark: 6,
//           date: new Date(),
//           subject: 
//             [
//               {
//                 title: 'Angular',
//                 teacher:
//                   [
//                     {
//                       first_name: 'Daniel',
//                       last_name: 'Vera'
//                     }
//                   ]
//               }
//             ]
//         }
//       ]
//   }, check)

//   studentSchema.create(
//     {
//       first_name: 'Lidia',
//       last_name: 'Cotobal',
//       mark: 
//         [
//           {
//             mark: 9,
//             date: new Date(),
//             subject: 
//                 {
//                   title: 'Mongo',
//                   teacher:
//                     [
//                       {
//                         first_name: 'Menchu',
//                         last_name: 'Martin'
//                       }
//                     ]
//                 }
//           }
//         ]
//     }, check)

//     studentSchema.create(
//       {
//         first_name: 'Karen',
//         last_name: 'Uzkaitegui',
//         mark: 
//           [
//             {
//               mark: 7,
//               date: new Date(),
//               subject: 
//                   {
//                     title: 'Fundamentos',
//                     teacher:
//                       [
//                         {
//                           first_name: 'Dani',
//                           last_name: 'Vera'
//                         }
//                       ]
//                   }
//             }
//           ]
//       }, check)


// NOTAS POR ALUMNO

studentSchema.find(
  {
    first_name: 'Karen'
  }
)
.then( (items) => {

})

// ASIGNATURAS POR ALUMNO

studentSchema.find(
  {
    first_name: 'Karen'
  }
)
.then( (items) => {
  console.log('Alumno >> ' + items[0].first_name);

  items[0].mark.forEach( mark_ => {
    console.log('Nota >> ' + mark_.mark + '\n');
    console.log('Asignatura >> ' + mark_.subject.title + '\n');

    console.log('Profesores >> ' + mark_.subject.teacher + '\n');

  })

});
// console.log('alumno >>' + items[0].first_name + ' profe >> ' + teacher.first_name);