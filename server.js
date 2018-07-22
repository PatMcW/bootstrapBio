'use strict'
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, ''))); //can i just leave this an empty string?
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`Your personal page server is running on port ${port}`);
})
