const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors')
const app = express();
const path = require("path");

var uri = process.env.URI;

app.use(cors());

app.use(express.json());

//logger middleware

app.use(function(request, response, next) {
    console.log("In comes a request to: " + request.url);
    next();
});