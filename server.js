const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const path = require('path');

var app = express();

var server = http.createServer(app);
app.use(express.static(__dirname + '/public/view/signup.html'));

var TAGSERVERINFO = "INFO SERVER => ";
var PORT = 3000;
server.listen(PORT, () => {
    console.log(TAGSERVERINFO, `server is started on ${PORT}`);
    console.log(TAGSERVERINFO, `http://localhost:${PORT}`);
});


app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json({ type: 'application/json' }));

app.get('/', function (req, res) {
    console.log(`${TAGSERVERINFO} run url ${req.method}: /`);
    res.sendFile(__dirname + "/" + "public/view/index.html");//aa.html
});
app.get('/envdata', function (req, res) {
    console.log(`${TAGSERVERINFO} run url ${req.method}: /envdata`);
    res.sendFile(__dirname + "/" + "public/view/envdata.html");//aa.html

});

app.post('/envdata', function (req, res) {
    console.log(`${TAGSERVERINFO} run url ${req.method}: /envdata`);
    console.log(`\t\tdata: ${req.body.msg}`);
    // ? send result vers client  
    res.contentType('json');
    // ? data envoye par server vers client 
    var data = {
        reponse: `INFO envoye par SERVER  : Bien Recu`,
        msg: req.body.msg
    };
    // ? send data
    res.send(JSON.stringify(data));
});


app.get('/operation', function (req, res) {
    console.log(`${TAGSERVERINFO} run url ${req.method}: /operation`);
    res.sendFile(__dirname + "/" + "public/view/operation.html");//aa.html
});

app.post('/operation', function (req, res, next) {
    console.log(`${TAGSERVERINFO} run url ${req.method}: /operation`);
    // ? recup les les donnees  et convert a et b vers type INT
    var a = parseInt(req.body.a);
    var b = parseInt(req.body.b);
    var op = req.body.op;
    // ? affich data sur console server "CMD"
    console.log(`\t\tdata a: ${a}`);
    console.log(`\t\tdata b: ${b}`);
    console.log(`\t\tdata op: ${op}`);
    var result = 0;
    // ? calculer a op b 
    if (op == "plus")
        result = a + b;
    else
        if (op == "moin")
            result = a - b;
        else
            if (op == "mult")
                result = a * b;
            else
                if (op == "div")
                    result = a / b;
                else
                    console.log("operation not found !!!!!");

    // ? affich result sur server "CMD"
    console.log(`\t\tresult : ${result}`);
    console.log(`\t\tformule : ${a} ${op} ${b} = ${result}`);

    // ? send result vers client  
    res.contentType('json');
    // ? data envoye par server vers client 
    var data = { result: result };
    // ? send data
    res.send(JSON.stringify(data));
});


app.post('/Employee', function (req, res) {
    console.log(`${TAGSERVERINFO} run url ${req.method}: /Employee`);
    const obj = JSON.stringify(req.body);
    console.log('\n\nEmployee : \n\nFirstName : ' + req.body.FirstName + '\nLastName : ' + req.body.LastName + '\nGender : ' + req.body.Gender + '\npassword : ' + req.body.Password + '\nConfirmPassword : ' + req.body.ConfirmPassword + '\nEmail : ' + req.body.Email + '\nsecurity : '
        + req.body.Security + '\nAnswer :' + req.body.Answer);
    res.contentType('json');
    // ? data envoye par server vers client 
    var data = {
        reponse: `INFO envoye par SERVER  : Bien Recu`,
    };
    // ? send data
    res.send(JSON.stringify(data));

});



app.post('/Hirer', function (req, res) {
    console.log(`${TAGSERVERINFO} run url ${req.method}: /Hirer`);
    var obj = {};
    console.log('\n\nHirer : \n\nFirstName : ' + req.body.FirstName + '\nLastName : ' + req.body.LastName + '\npassword : ' + req.body.Password + '\nConfirmPassword : ' + req.body.ConfirmPassword + '\nEmail : ' + req.body.Email + '\nSecurity : '
        + req.body.Security + '\nAnswer :' + req.body.Answer);

    res.contentType('json');
    // ? data envoye par server vers client 
    var data = {
        reponse: `INFO envoye par SERVER  : Bien Recu`,
    };
    // ? send data
    res.send(JSON.stringify(data));

});


app.get('/index', (req, res) => {
    console.log(`${TAGSERVERINFO} run url ${req.method}: /index`);
    res.sendFile("index.html", { root: path.join(__dirname, "./public/view") })
});
