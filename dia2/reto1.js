const mongoose = require('mongoose');
const photoSchema = require('./schemas/photo.schema');

const url =
  "mongodb+srv://korbyvk:alohomora@cluster0.twdkbdw.mongodb.net/codenotch";

mongoose.connect(url, {
  useNewUrlParser: false,
  useUnifiedTopology: false,
});

function check (err, res){
    err ? console.log(err) : console.log(res);
}

let hamster = {
    username: 'daniel',
    title: 'hamster en la rueda',
    URL: 'URLEJEMPLO',
    description: 'un hamster en la rueda'
}

let gatos = {
    username: 'lidia',
    title: 'gatos jugando',
    URL: 'URLEJEMPLO',
    description: 'dos gatito jugando'
}

let patos = {
    username: 'diego',
    title: 'patos en el agua',
    URL: 'URLEJEMPLO',
    description: 'patitos en el agua'
}

//! INSERCION

photoSchema.insertMany([hamster, gatos, patos], check)

//! OBTENNCION

photoSchema.find({
    username: 'daniel'
})
.then( (items) => {
    console.log(items);
});


//! ACTUALIZACION

photoSchema.findOneAndUpdate(
    {title: 'patos en el agua'}, //la busqueda
    {description: 'dos patitos muy cuquis'}, // los datos a sustituir
    check
    );

//! ELIMINACION


photoSchema.deleteOne(
    {
        username: 'lidia',
        title: 'gatos jugando'
    }
)
.then( (items) => {
    console.log(items);
});


photoSchema.deleteMany(
    {
        username: 'daniel'
    }
)
.then( (items) => { 
    console.log(items);
});
