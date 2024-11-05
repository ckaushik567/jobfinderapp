const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    Email:{
         type:String,
        required:true,
        unique: true,
    },
    Password:{
        type:Number,
        required:true
    }
})

module.exports = new mongoose.model("User", userSchema);