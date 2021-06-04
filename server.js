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

//static file middleware
var staticPath = path.resolve(__dirname, "static");
app.use(express.static(staticPath));

//file not found middleware

app.use(function(request, response, next) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Error: Looks like you did not find the file you were looking for");
});

//connect to MongoDB

const MongoClient = require('mongodb').MongoClient;
let db;

MongoClient.connect(uri,(err, client) =>{
    db = client.db('webstore');
})


app.get('/hgh', (req, res, next) =>{
    res.send('Select a collection, e.g /collection/messages')
})

const port = process.env.PORT || 3000;


app.listen(port);