var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home Control', home: "active" });
});

router.get('/nosotros', function(req, res, next) {
  res.render('nosotros', { nosotros: "active" });
});

var products = [
	{
		id: "rm-pro",
		name: "RM PRO",
		description: "(Control remoto universal WiFi) IR, RF, Temperatura",
		image1: "images/productos/RM_Pro_1.jpg",
		image2: "images/productos/RM_Pro_2.jpg",
		image3: "images/productos/RM_Pro_3.png"
	},
	{
		id: "rm-mini",
		name: "RM Mini 3",
		description: "(Control remoto universal WiFi) IR",
		image1: "images/productos/RM_Mini_1.jpg",
		image2: "images/productos/RM_Mini_2.jpg",
		image3: "images/productos/RM_Mini_3.jpg"
	},
	{
		id: "smart-switch",
		name: "Enchufes Smart",
		description: "Tipo C (En Linea), Tipo I (Cruzados), Tipo F (Schuko)",
		image1: "images/productos/Smart_Switch_1.jpg",
		image2: "images/productos/Smart_Switch_2.jpg",
		image3: "images/productos/Smart_Switch_3.jpg"
	},
	{
		id: "alarm-kit",
		name: "Kit Alarma S1 WiFi",
		description: "Domótica (automatización por sensores)",
		image1: "images/productos/A1_1.jpg",
		image2: "images/productos/A1_2.jpg",
		image3: "images/productos/A1_3.jpg"
	},
	{
		id: "sensor-env",
		name: "Sensor de Ambiente A1",
		description: "(Temperatura, Humedad, Calidad de Aire, Luz, Ruido, Domótica)",
		image1: "images/productos/S1_1.jpg",
		image2: "images/productos/S1_2.jpg",
		image3: "images/productos/S1_3.jpg"
	},
	{
		id: "lamp-holder",
		name: "Adaptadores para Lamparas",
		description: "(E27, Control Remoto RF) Simples / Kit de 4",
		image1: "images/productos/Lamp_Holder_1.jpg",
		image2: "images/productos/Lamp_Holder_2.jpg",
		image3: "images/productos/Lamp_Holder_3.jpg"
	},
	{
		id: "tactil-switch",
		name: "Interruptores Táctiles RF",
		description: "(Panel de vidrio, Control Remoto RF)",
		image1: "images/productos/Interruptores_1.jpg",
		image2: "images/productos/Interruptores_2.jpg",
		image3: "images/productos/Interruptores_3.jpg"
	},
	{
		id: "accesories",
		name: "Accesorios",
		description: "(Sensores, Controles Remotos RF)",
		image1: "images/productos/Accesorios.jpg",
		image2: "",
		image3: ""
	}
];

router.get('/health', function(req, res, next) {
  res.send({ health: "active" });
});

router.get('/productos', function(req, res, next) {
  res.render('productos', { products: products, productos: "active" });
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
