var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var env = require('dotenv').load();

var personas = require("./routes/personas");

//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Models
var models = require("./models");

//Sync Database

models.sequelize.sync({
    force: false
}).then(function () {
    console.log('Todo marcha bien Milhouse!')
}).catch(function (err) {
    console.log(err, "Algo salió mal al actualizar la Base de Datos")
});
 

//Routes
app.use("/personas", personas);
 
app.get('/', function(req, res) {
 
    res.send('Hola Mundo');
 
});
 
//Configurar Puerto
app.set('port', process.env.PORT || 5000);

app.listen(5000, function(err) {
 
    if (!err)
        console.log("Server started, listening at localhost:", app.get('port'));
    else console.log(err)
 
});