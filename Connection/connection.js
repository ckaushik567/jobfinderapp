const mongoose = require('mongoose');

const conn = mongoose.connect("mongodb://localhost:27017/users",
    {
        useNewUrlParser: true,
        // useUnifiedTopology: true
    });

    conn.then(()=>{
        console.log('connected Succesfully');
    })
    .catch((err)=>{
        console.log(err)
    });

    module.exports = conn;