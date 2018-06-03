var express = require('express');
var router = express.Router();

var persona = require("../controllers/personaController.js");


// Get all personas
router.get('/', persona.list);

// Get single persona by id
router.get('/show/:id', persona.show);

// Save persona
router.post('/save', persona.save);

// Edit persona
router.get('/edit/:id', persona.edit);

// Update persona
router.put('/update/:id', persona.update);

// Delete persona
router.delete('/delete/:id', persona.delete);

module.exports = router;