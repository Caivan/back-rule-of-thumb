const cors = require('cors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');

const indexRouter = require('./routes/index');
const publicFigureRouter = require('./routes/public-figures.route');

const app = express();

//middlewears
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/', publicFigureRouter);



module.exports = app;
