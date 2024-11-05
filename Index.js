const users =  require('./Router/routers')
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./Connection/connection')

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/',users)

app.listen(3000,()=>{
    console.log('server is listning at port 3000')
})