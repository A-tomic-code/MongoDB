const mongoose = require('mongoose');

const Profile = require("./schemas/profile.schema");

const url =
  "mongodb+srv://korbyvk:alohomora@cluster0.twdkbdw.mongodb.net/codenotch";

mongoose.connect(url, {
  useNewUrlParser: false,
  useUnifiedTopology: false,
});



let profile = new Profile({
    name: 'reto 3',
    surname: 'soy una apellido',
    dateOfBirth: '20-10-1986',
    comments: 'me duelen los ojos',
    rol: 'admine'
}).save(onSave)

function onSave(){
    console.log('Document saved !! \n');
}