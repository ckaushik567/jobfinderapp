const express = require('express');
const router = express.Router();
const Users = require('../Modal/userSchema');
const bodyParser = require('body-parser');

router.post('/signup', async(req,res)=>{
    const {name,Email,Password} = req.body
    const users =  new User({name,Email,Password});

    const email = Users.findOne({Email});

    if(email!=Email){
        await users.save();
        res.staus(201).json({message:"User creted succesfully",user: users})
    }
    else{
        res.staus(401).json({message:"Email alredy exits"})
    }

});

module.exports = router