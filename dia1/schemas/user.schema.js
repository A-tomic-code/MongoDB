const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    role: String,
    verified: String
});

// UserSchema.pre('save', function(next){
//     console.log(this);
//     console.log(this.name);
// })

UserSchema.pre('save', (next) =>{
    console.log(this);
    console.log(this.name);
})

module.exports = mongoose.model('User', UserSchema);


// const UserSchema = new mongoose.Schema({
//     login:{ 

//         type: String,
//         },
//          Password:{
//             type: String,
//             validate: [
//             function(Password)
//             {
//                 console.log(Password.length);


//                 return Password.length >= 6 ;
//             },
//             "El password debe ser mas largo"],
//             select: false
//         },
//         age: Number,
// })

//     UserSchema.pre("save" , function(next){

//         console.log("Middleare de entrada")
//         console.log(this);

//         if(this.age > 20)
//         {
//             console.log("Has introducido una edad mayor")
//             next();
//         }
//         else
//         console.log("Solo edades mayores que 20")
//             mongoose.disconnect()
//     })

module.exports =  mongoose.model("User" , UserSchema, "User")