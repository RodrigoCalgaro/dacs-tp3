var express = require('express');
var router = express.Router();

var persona = require("../controllers/personaController.js");


// Get all personas
router.get('/', persona.list);

// Get single persona by id
router.get('/show/:id', persona.show);

// Create persona
router.get('/create', persona.create);

// Save persona
router.post('/save', persona.save);

// Edit persona
router.get('/edit/:id', persona.edit);

// Edit update
router.post('/update/:id', persona.update);

// Delete persona
router.post('/delete/:id', persona.delete);

module.exports = router;