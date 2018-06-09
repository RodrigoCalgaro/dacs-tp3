const Persona = require('./../models').Persona;

var personaController = {};



personaController.list = function (req, res) {
    var list = Persona.findAll().then(personas => {
        res.status(200).json(personas);
        return; 
    })
}


personaController.show = function(req, res) {
    Persona.find({ where: { idPersona: req.params.id } }).then(persona => {
        res.status(200).json(persona);
        return;
    });
};


personaController.save = function (req, res) {
    //Forming object from modal
    var nuevaPersona = Persona.build(req.body);
    //Inserting Data into database
    nuevaPersona.save().then(() => {
        console.log("Successfully created an persona.");
        res.status(200).json('Guardado Correctamente');
        return;
    })
    .catch(error => {
    console.log('Error in Inserting Record: ' + error);
    })
};


personaController.edit = function (req, res) {
    Persona.find({ where: { idPersona: req.params.id } }).then(persona => {    
        res.status(200).json(persona);
        return;
    })    
};


personaController.update = function(req, res) {
  Persona.findById(req.params.id).then(function (persona) {
    persona.updateAttributes(req.body);
    res.status(200).json("Actualizado Correctamente");
    return;
    });
};


personaController.delete = function (req, res) {
    Persona.findById(req.params.id).then((persona) => {
        persona.destroy();
        console.log("Persona deleted!");
        res.status(200).json("Borrado Correctamente");
        return;
    })
    .catch((err) => {
        console.log(err);
        res.json(err)
    })
};


module.exports = personaController;