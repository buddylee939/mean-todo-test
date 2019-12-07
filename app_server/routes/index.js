var express = require('express');
var router = express.Router();

var ctrlStatic = require('../controllers/static');

/* GET static pages. */
router.get('/', ctrlStatic.index);
router.get('/about', ctrlStatic.about);
router.get('/contact', ctrlStatic.contact);

module.exports = router;
