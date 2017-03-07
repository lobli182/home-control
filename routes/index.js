var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home Control', home: "active" });
});

router.get('/nosotros', function(req, res, next) {
  res.render('nosotros', { nosotros: "active" });
});

router.get('/productos', function(req, res, next) {
  res.render('productos', { productos: "active" });
});

router.get('/usos', function(req, res, next) {
  res.render('usos', { usos: "active" });
});

router.get('/soporte', function(req, res, next) {
  res.render('soporte', { soporte: "active" });
});

router.get('/contacto', function(req, res, next) {
  res.render('contacto', { contacto: "active" });
});

router.get('/noticias', function(req, res, next) {
  res.render('noticias', { noticias: "active" });
});

module.exports = router;
