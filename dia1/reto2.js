const mongoose = require('mongoose');

const User = require("./schemas/users.schema");
const Profile = require("./schemas/profile.schema");
const Credentials = require("./schemas/credentials.schema");

const url =
  "mongodb+srv://korbyvk:alohomora@cluster0.twdkbdw.mongodb.net/codenotch";

mongoose.connect(url, {
  useNewUrlParser: false,
  useUnifiedTopology: false,
});


function onSave(){
    console.log('Document saved !! \n');
}

let user = new User({
    login: 'Hello',
    password: 'World',
}).save(onSave);

let profile = new Profile({
    name: 'Primer usuario',
    surname: 'soy una apellido',
    dateOfBirth: '20-10-1986',
    comments: 'me duelen los ojos',
    rol: 'admin'
}).save(onSave)

let credentials = new Credentials({
    address: 'Santo angel, 45',
    email: 'email@e.com',
    phone: '654214333'
}).save(onSave);