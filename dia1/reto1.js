const mongoose = require("mongoose");

let User = require("./schemas/user.schema");

const url =
  "mongodb+srv://korbyvk:alohomora@cluster0.twdkbdw.mongodb.net/codenotch";

mongoose.connect(url, {
  useNewUrlParser: false,
  useUnifiedTopology: false,
});

let document1 = new User({
  name: "Daniel",
  email: "daniel@d.com",
  role: "admin",
  verified: true,
}).save(onSave);

let document2 = new User({
  name: "Karen",
  email: "karen@d.com",
  role: "user",
  verified: true,
}).save(onSave);

let document3 = new User({
  name: "Diego",
  email: "diego@d.com",
  role: "admin",
  verified: true,
}).save(onSave);

let document4 = new User({
  name: "Lidia",
  email: "userl@d.com",
  role: "user",
  verified: true,
}).save(onSave);

let document5 = new User({
  name: "Menchu",
  email: "menchu@d.com",
  role: "teacher",
  verified: true,
}).save(onSave);


function onSave(){
    console.log('DOCUMENT SUCCEFULLY SAVED');
}