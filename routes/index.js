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
		image3: "images/productos/RM_Pro_3.png",
		href: "/rmpro"
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
		image3: "images/productos/Smart_Switch_3.jpg",
		href: "/smartSwitches"
	},
	{
		id: "alarm-kit",
		name: "Kit Alarma S1 WiFi",
		description: "Domótica (automatización por sensores)",
		image1: "images/productos/S1_1.jpg",
		image2: "images/productos/S1_2.jpg",
		image3: "images/productos/S1_3.jpg"

	},
	{
		id: "sensor-env",
		name: "Sensor de Ambiente A1",
		description: "(Temperatura, Humedad, Calidad de Aire, Luz, Ruido, Domótica)",
		image1: "images/productos/A1_1.jpg",
		image2: "images/productos/A1_2.jpg",
		image3: "images/productos/A1_3.jpg",
		href: "/a1"
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
	id: "rm-mini-3",
	href:"",
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
};

var rmPro = {
	title: "Rm Pro",
	id:"rm-pro",
	href:"",
	headerImg: "images/rmPro/1.jpg",
	images: [
		{
			src: "images/rmPro/2.jpg",
			alt: "",
			text: ""
		},
		{
			src: "images/rmPro/3.jpg",
			alt: "",
			text: ""
		},
		{
			src: "images/rmPro/4.jpg",
			alt: "",
			text: ""
		},
		{
			src: "images/rmPro/5.jpg",
			alt: "",
			text: ""
		},
		{
			src: "images/rmPro/6.jpg",
			alt: "",
			text: ""
		},
		{
			src: "images/rmPro/7.jpg",
			alt: "",
			text: ""
		},
		{
			src: "images/rmPro/8.jpg",
			alt: "",
			text: ""
		},
		{
			src: "images/rmPro/9.jpg",
			alt: "",
			text: ""
		},
		{
			src: "images/rmPro/10.jpg",
			alt: "",
			text: ""
		},
		{
			src: "images/rmPro/11.jpg",
			alt: "",
			text: ""
		},
		{
			src: "images/rmPro/12.jpg",
			alt: "",
			text: ""
		},
		{
			src: "images/rmPro/13.jpg",
			alt: "",
			text: ""
		},
		{
			src: "images/rmPro/14.jpg",
			alt: "",
			text: ""
		},
		{
			src: "images/rmPro/15.jpg",
			alt: "",
			text: ""
		}
	],
	datosTecnicos: {
		esp: {
			headers1: ["Voltaje de Entrada:","Temp de funcionamiento:","Frecuencia WiFi:","Frecuencia IR:","Frecuencia RF:"],
			values1: ["5V DC","0~55℃", "2.4 GHz 802.11b/g/n","38K","433mhz/315mhz"],
			headers2: ["Corriente de Entrada:","Humedad de funcionamiento:","Consumo en Standby:","Dirección de IR:","Potencia de Transmisión:"],
			values2: ["≥1ª","≤85%RH","≤1W","Todas las direcciones","≤10dBm"]
		},
		dimensions: "114.5mm (largo) × 109mm (ancho) × 36mm (alto)",
		materials: "ABS / Plástico específico para rayos infrarrojo",
		characteristics:["Control remoto WiFi",
		"Compatible con iOS/Android/Windows Phone (Utilizando Apk de Android)",
		"Acceso a través de WiFi/3G/4G sin ninguna configuración complicada en su Router",
		"Lectura de Temperatura Ambiente",
		"Timers programables",
		"Uso de Escenas (Permiten ejecutar varias funciones en una, Ej: encender TV, Encender Canalera y Sintonizar Canal 200)",
		"\“Healty Sleep\” Ahorra energía en el uso de su Aire Acondicionado mientras duerme",
		"Acceso a miles de Controles ya existentes en la Nube",
		"Permite la creación de Controles totalmente customizables, Ej: Uno solo para manejar Luces y TV",
		"Aprendizaje de controles no existentes en la Nube",
		"Operación Manual, por Temporizadores y/o Ubicación (GPS)",
		"Infrarrojo de alta potencia (Puede ubicarse arriba de un TV e igual operarlo gracias al rebote de los rayos IR)",
		"Activación con voz si se utiliza con App Intermedia RM Tasker"
		]
	}
};

var a1 = {
	title: "Sensor de Ambiente A1",
	id: "a1",
	href:"",
	headerImg: "images/a1/1.jpg",
	images: [
		{
			src: "images/a1/2.jpg",
			alt: "",
			text: ""
		},
		{
			src: "images/a1/3.jpg",
			alt: "",
			text: ""
		},
		{
			src: "images/a1/4.jpg",
			alt: "",
			text: ""
		},
		{
			src: "images/a1/5.jpg",
			alt: "",
			text: ""
		},
		{
			src: "images/a1/6.jpg",
			alt: "",
			text: ""
		},
		{
			src: "images/a1/7.jpg",
			alt: "",
			text: ""
		}
	],
	datosTecnicos: {
		esp: {
			headers1: ["Voltaje de Entrada:","Temp de funcionamiento:","Frecuencia WiFi:"],
			values1: ["5V DC","-20~+55℃", "2.4 GHz 802.11b/g/n"],
			headers2: ["Corriente de Entrada:","Humedad de funcionamiento:","Consumo en Standby:"],
			values2: ["1A","≤85%RH","≤0.5W"]
		},
		dimensions: "135mm (alto) × 70mm (ancho) × 68mm (profundidad)",
		materials: "ABS",
		characteristics:[
			"Autoconfigurable en 1 minuto",
			"Compatible con iOS/Android/Windows Phone (Utilizando Apk de Android)",
			"Acceso a través de WiFi/3G/4G sin ninguna configuración complicada en su Router",
			"Lectura de Temperatura Ambiente, Ruido ambiente, Humedad ambiente, luminosidad y Calidad de Aire",
			"Indicador LED en color para Estado del Aire",
			"Brinda Interacción Tipo IFTTT (If This, Then That) con el resto del ecosistema Broadlink. (Ej. si se detecta que la temperatura bajó a 10°C entonces enciende la estufa (mediante cualquier enchufe SP inteligente); si luego la temperatura sube a 18°C la apaga.)",
			"Cientos de usos inteligentes dependiendo sus necesidades y equipos disponibles"
		]
	}
};

var smartSwitches= {
	title: "Enchufes Smart",
	headerImg:"images/switches/1.jpg",
	products: [

		{
			id: "sp3",
			name: "SP 3",
			description: "Tipo F (Schuko)",
			image1: "images/productos/Smart_Switch_3.jpg",
			href: "/sp3"
		},
		{
			id: "sp-mini3",
			name: "SP Mini 3",
			description: "Tipo I (Cruzados)",
			image1: "images/productos/Smart_Switch_2.jpg",
			href: "/spmini"
		},
		{
			id: "sp2",
			name: "SP 2",
			description: "Tipo C (En Linea)",
			image1: "images/productos/Smart_Switch_1.jpg",
			href: "/sp2"
		}
	]
};

var sp2 = {
	title: "SP2",
	id: "sp2",
	href:"",
	headerImg: "images/sp2/1.jpg",
	images: [
		{
			src: "images/sp2/2.jpg",
			alt: "",
			text: ""
		}
	],
	datosTecnicos: {
		esp: {
			headers1: ["Voltaje de Entrada:","Temp de funcionamiento:","Frecuencia WiFi:"],
			values1: ["230v AC, 50/60hz","0~50℃", "2.4 GHz 802.11b/g/n"],
			headers2: ["Corriente/Potencia Max:","Humedad de funcionamiento:","Consumo en Standby:"],
			values2: ["10A / 2200W","≤80%RH","≤1.1W"]
		},
		dimensions: "100mm (alto) × 56mm (ancho) × 48mm (profundidad) sin contar enchufe, 80mm (profundidad) total",
		materials: "ABS Clase V0 PC",
		characteristics:[
			"Luz Nocturna/Veladora programable",
			"Enciende o apaga cualquier artefacto eléctrico remotamente (Ej. Cafetera, deshumidificador, secarropas, calefón, horno, caloventiladores, equipos de riego, etc)",
			"Compatible con iOS/Android/Windows Phone (Utilizando Apk de Android)",
			"Acceso a través de WiFi/3G/4G sin ninguna configuración complicada en su Router",
			"Timers programables (26 grupos)",
			"Timer Aleatorio",
			"Cuenta Regresiva",
			"Interacción Tipo IFTTT (If This, Then That) con sensor Broadlink A1 y/o Kit de Alarma S1",
			"Historial de Eventos",
			"Estado ON/OFF",
			"Protección contra Sobrecargas",
			"Operación Manual, por Temporizadores y/o Ubicación (GPS)",
			"Activación con voz si se utiliza con App Intermedia RM Tasker"
		]
	}
};

var sp3 = {
	title: "SP 3",
	id: "sp3",
	href:"",
	headerImg: "images/sp3/1.jpg",
	images: [
		{
			src: "images/sp3/2.jpg",
			alt: "",
			text: ""
		},
		{
			src: "images/sp3/3.jpg",
			alt: "",
			text: ""
		}
	],
	datosTecnicos: {
		esp: {
			headers1: ["Voltaje de Entrada:","Temp de funcionamiento:","Frecuencia WiFi:"],
			values1: ["230v AC, 50/60hz","0~50℃", "2.4 GHz 802.11b/g/n"],
			headers2: ["Corriente/Potencia Max:","Humedad de funcionamiento:","Consumo en Standby:"],
			values2: ["16A / 3600W","≤80%RH","≤1.1W"]
		},
		dimensions: "94mm (alto) × 50mm (ancho) × 45mm (profundidad) sin contar enchufe, 81,6mm (profundidad) total",
		materials: "ABS Clase V0 PC",
		characteristics:[
			"Luz Nocturna/Veladora programable",
			"Enciende o apaga cualquier artefacto eléctrico remotamente (Ej. Cafetera, deshumidificador, secarropas, calefón, horno, caloventiladores, equipos de riego, etc)",
			"Compatible con iOS/Android/Windows Phone (Utilizando Apk de Android)",
			"Acceso a través de WiFi/3G/4G sin ninguna configuración complicada en su Router",
			"Timers programables (26 grupos)",
			"Timer Aleatorio",
			"Cuenta Regresiva",
			"Interacción Tipo IFTTT (If This, Then That) con sensor Broadlink A1 y/o Kit de Alarma S1",
			"Historial de Eventos",
			"Estado ON/OFF",
			"Protección contra Sobrecargas",
			"Operación Manual, por Temporizadores y/o Ubicación (GPS)",
			"Activación con voz si se utiliza con App Intermedia RM Tasker"
		]
	}
};

var spmini = {
	title: "SP Mini 3",
	id: "spmini",
	href:"",
	headerImg: "images/spmini/1.jpg",
	images: [
		{
			src: "images/spmini/2.jpg",
			alt: "",
			text: ""
		},
		{
			src: "images/spmini/3.jpg",
			alt: "",
			text: ""
		}
	],
	datosTecnicos: {
		esp: {
			headers1: ["Voltaje de Entrada:","Temp de funcionamiento:","Frecuencia WiFi:"],
			values1: ["100-240v AC, 50/60hz","0~50℃", "2.4 GHz 802.11b/g/n"],
			headers2: ["Corriente/Potencia Max:","Humedad de funcionamiento:","Consumo en Standby:"],
			values2: ["10A / 2200W","≤85%RH","≤1.1W"]
		},
		dimensions: "66mm (alto) × 43mm (ancho) × 33mm (profundidad) sin contar enchufe, 55mm (profundidad) total",
		materials: "ABS Clase V0 PC",
		characteristics:[
			"Compacto",
			"Enciende o apaga cualquier artefacto eléctrico remotamente (Ej. Cafetera, deshumidificador, secarropas, calefón, horno, caloventiladores, equipos de riego, etc)",
			"Compatible con iOS/Android/Windows Phone (Utilizando Apk de Android)",
			"Acceso a través de WiFi/3G/4G sin ninguna configuración complicada en su Router",
			"Timers programables (26 grupos)",
			"Timer Aleatorio",
			"Cuenta Regresiva",
			"Interacción Tipo IFTTT (If This, Then That) con sensor Broadlink A1 y/o Kit de Alarma S1",
			"Historial de Eventos",
			"Estado ON/OFF",
			"Protección contra Sobrecargas",
			"Operación Manual, por Temporizadores y/o Ubicación (GPS)",
			"Activación con voz si se utiliza con App Intermedia RM Tasker"
		]
	}
};


router.get('/health', function(req, res, next) {
  res.send({ health: "active" });
});

router.get('/productos', function(req, res, next) {
  res.render('productos', { products: products, productos: "active" });
});

router.get('/rmmini3', function(req, res, next) {
  res.render('product', rmMini_3);
});

router.get('/rmpro', function(req, res, next) {
  res.render('product', rmPro);
});

router.get('/a1', function(req, res, next) {
  res.render('product', a1);
});

router.get('/sp3', function(req, res, next) {
  res.render('product', sp3);
});

router.get('/sp2', function(req, res, next) {
  res.render('product', sp2);
});

router.get('/spmini', function(req, res, next) {
  res.render('product', spmini);
});

router.get('/smartSwitches', function(req, res, next) {
  res.render('subproducts', smartSwitches);
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
