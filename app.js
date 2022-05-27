require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const router = require('./routes/index');
const { requestLogger, errorLogger } = require('./middlewares/logger');


const { NODE_ENV, BASE_URL } = process.env;

const app = express();

const { PORT = 3000 } = process.env; 

mongoose
  .connect(NODE_ENV === 'production' ? BASE_URL : '', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });

app.use(requestLogger);
app.use(errorLogger);
app.use(errors);

app.use(router);

app.listen(PORT);