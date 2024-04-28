const express = require('express');
const router = express.Router();
// Importa el controlador
const { getAllEvents } = require('../controllers/eventController');
const { getEventById } = require('../controllers/eventController');

// Utilitza el controlador per a la ruta que llista tots els usuaris
router.get('/events', getAllEvents);
router.get('/events/:id', getEventById);

module.exports = router;