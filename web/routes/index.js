var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
   res.render('home', {head_title: "Principal"});
});

router.get('/celebraciones', function(req, res, next) {
  res.render('celebraciones', {head_title: "Celebraciones"});
});

router.get('/contacto', function(req, res, next) {
  res.render('contacto', {head_title: "Contacto"});
});

router.get('/galeria', function(req, res, next) {
  res.render('galeria', {head_title: "Galeria"});
});



module.exports = router;
