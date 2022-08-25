const mongoose = require('mongoose');

const url = "mongodb+srv://korbyvk:alohomora@cluster0.twdkbdw.mongodb.net/codenotch";

const database = mongoose.connect(url,
    {
        useNewUrlParser: false,
        useUnifiedTopology: false
    }
)
.then( (db) => {
    console.log('db on >> ' + db.connection.host)
})

module.exports = database