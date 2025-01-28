const mongoose = require('mongoose');
require('dotenv').config();

const URL = process.env.URL;


mongoose.connect(URL,
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));