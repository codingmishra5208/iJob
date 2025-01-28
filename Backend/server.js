const express = require('express');
const app=express();
require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 3001;
require('./dbConnection');


app.use(express.json());
app.use(bodyParser.json());
app.use(cors())

const FindJob = require('./Router/FindJobRouter');
const SignIn = require('./Router/SigninRoutes');
const LogIn = require('./Router/LoginRoutes');


app.use('/findjob',FindJob);
app.use('/signup',SignIn);
app.use('/login',LogIn);



app.listen(PORT,()=>{
    console.log(`server is litenning on ${PORT}`);
})


