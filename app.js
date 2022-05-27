require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');


const { NODE_ENV, BASE_URL } = process.env;

const app = express();

const { PORT = 3000 } = process.env; 

app.use('/users', auth, require('./routes/users'));
app.use('/cards', auth, require('./routes/movies'));

app.listen(PORT);