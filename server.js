const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const path = require('path');

var app = express();

var server = http.createServer(app);

server.listen(3000, () => {
    console.log('server is started on 3000');
});

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

app.get('/json', (req, res) => {    // si je voulais afficher ceux qu'il dans index.html je mets '/index'...
    res.json({
        msg: "test"
    })
})

app.get('/index', (req, res) => {
    res.send('<h1>je suis la ... </h1?');
});

app.get('/index', (req, res) => {
    res.sendFile("index.html", { root: path.join(__dirname, "./public/view") })
});
