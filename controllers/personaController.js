const Persona = require('./../models').Persona;

var personaController = {};



personaController.list = function (req, res) {
    var list = Persona.findAll().then(personas => {
        res.send({personas: personas});        
    })
}


personaController.show = function(req, res) {
    Persona.find({ where: { idPersona: req.params.id } }).then(persona => {
        res.send({persona: persona});
        return persona
    });
};


personaController.create = function (req, res) {
    res.send("Falta Implementar");
}


personaController.save = function (req, res) {
    //Forming object from modal
    var nuevaPersona = Persona.build({
        nombre: req.body.nombrePersona,
        apellido: req.body.apellidoPersona
        //agregar los otros atributos
    });
    //Inserting Data into database
    nuevaPersona.save().then(() => {
        console.log("Successfully created an persona.");
        res.redirect("/personas/show/"+nuevaPersona.idPersona);
    })
    .catch(error => {
    console.log('Error in Inserting Record: ' + error);
    
    })
}


personaController.edit = function (req, res) {
    Persona.find({ where: { idPersona: req.params.id } }).then(persona => {    
        res.send({persona: persona});
    })    
}


personaController.update = function(req, res) {
  Persona.findById(req.params.id).then(function (persona) {
    persona.updateAttributes({
        nombre: req.body.nombrePersona,
        apellido: req.body.apellidoPersona
    })
    res.redirect("/personas/show/"+persona.idPersona);
    });
}


personaController.delete = function (req, res) {
    Persona.findById(req.params.id).then(function (persona) {
        persona.destroy();
        console.log("persona deleted!");
        res.redirect("/personas");   
    });
}


module.exports = personaController;