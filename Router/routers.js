const express = require('express');
const router = express.Router();
const Users = require('../Modal/userSchema')
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

router.post('/signup', async (req, res) => {
    try {
        const { name, Email, Password } = req.body;
        const users = new Users({ name, Email, Password });
        const email = await Users.findOne({ Email });

        if (!email) {
            await users.save();
            res.status(201).json({ message: "User creted succesfully", user: users })
        }
        else {
            res.status(401).json({ message: "Email alredy exits" })
        }
    }
    catch (err) {
        console.log(err);
    }
});

router.post('/signin', (req, res) => {

})

module.exports = router