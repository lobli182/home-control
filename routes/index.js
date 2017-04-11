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
		image3: "images/productos/RM_Mini_3.jpg",
		href: "/rmmini3"
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

var rmMini_3 = {
	title: "Rm Mini 3",
	headerImg: "images/rmMini3/1.jpg",
	images: [
		{
			src: "images/rmMini3/2.jpg",
			alt: "",
			text: ""
		},
		{
			src: "images/rmMini3/3.jpg",
			alt: "",
			text: ""
		},
		{
			src: "images/rmMini3/4.png",
			alt: "",
			text: ""
		},
		{
			src: "images/rmMini3/5.jpg",
			alt: "",
			text: ""
		}
	],
	datosTecnicos: {
		esp: {
			headers1: ["Voltaje de Entrada:","Temp de funcionamiento:","Frecuencia WiFi:","Frecuencia IR:","Frecuencia RF:"],
			values1: ["5V DC","0~50℃", "2.4 GHz 802.11b/g/n","38K","N/A"],
			headers2: ["Corriente de Entrada:","Humedad de funcionamiento:","Consumo en Standby:","Dirección de IR:"],
			values2: ["≥500mA","≤85%RH","≤0.85W","Todas las direcciones"]
		},
		dimensions: "55mm (largo) × 55mm (ancho) × 64.5mm (alto)",
		materials: "ABS / Plástico específico para rayos infrarrojos",
		characteristics:["Control remoto WiFi","Compatible con iOS/Android/Windows Phone (Utilizando Apk de Android)",
		"Acceso a través de WiFi/3G/4G sin ninguna configuración complicada en su Router",
		"Timers programables","Uso de Escenas (Permiten ejecutar varias funciones en una, Ej: encender TV, Encender Canalera y Sintonizar Canal 200)",
		"“Healty Sleep” Ahorra energía en el uso de su Aire Acondicionado mientras duerme",
		"Acceso a miles de Controles ya existentes en la Nube",
		"Permite la creación de Controles totalmente customizables, Ej: Uno solo para manejar Luces y TV",
		"Aprendizaje de controles no existentes en la Nube",
		"Operación Manual, por Temporizadores y/o Ubicación (GPS)",
		"Infrarrojo de alta potencia (Puede ubicarse arriba de un TV e igual operarlo gracias al rebote de los rayos IR)",
		"Activación con voz si se utiliza con App Intermedia RM Tasker"]
	}
}

router.get('/health', function(req, res, next) {
  res.send({ health: "active" });
});

router.get('/productos', function(req, res, next) {
  res.render('productos', { products: products, productos: "active" });
});

router.get('/rmmini3', function(req, res, next) {
  res.render('product', rmMini_3);
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
