// Always require and configure near the top
require('dotenv').config();
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon')
const logger = require('morgan');
const PORT = 3001

// Connect to the database
require('./config/database');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')))
app.use(express.static(path.join(__dirname, 'build')))

//api
app.use('/api/users', require('./routes/api/users'))

//catch all 

app.get('/*', (req,res) => {
    res.sendFile(path.join(__dirName, 'build', 'index.html'))
})

app.listen(PORT, () => {
    console.log("backend is listening")
})