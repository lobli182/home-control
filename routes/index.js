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
		name: "Control Universal Wifi Broadlink Rm Pro4",
		description: "(Control remoto universal WiFi) IR, RF, Temperatura",
		image1: "images/productos/RM_Pro_1.jpg",
		image2: "images/productos/RM_Pro_2.jpg",
		image3: "images/productos/RM_Pro_3.png",
		href: "/rmpro"
	},
	{
		id: "rm-mini",
		name: "Control Universal Wifi Broadlink Rm Mini3",
		description: "(Control remoto universal WiFi) IR",
		image1: "images/productos/RM_Mini_1.jpg",
		image2: "images/productos/RM_Mini_2.jpg",
		image3: "images/productos/RM_Mini_3.jpg",
		href: "/rmmini3"
	},
	{
		id: "smart-switch",
		name: "Enchufes Inteligentes",
		description: "Tipo C (En Linea), Tipo I (Cruzados), Tipo F (Schuko)",
		image1: "images/productos/Smart_Switch_1.jpg",
		image2: "images/productos/Smart_Switch_2.jpg",
		image3: "images/productos/Smart_Switch_3.jpg",
		href: "/smartSwitches"
	},
	{
		id: "alarm-kit",
		name: "Kit Alarma Smart Broadlink S1 Wifi",
		description: "Domótica (automatización por sensores)",
		image1: "images/productos/S1_1.jpg",
		image2: "images/productos/S1_2.jpg",
		image3: "images/productos/S1_3.jpg",
		href: "/alarmkit"

	},
	{
		id: "sensor-env",
		name: "Sensor De Ambiente Ifttt Broadlink A1",
		description: "(Temperatura, Humedad, Calidad de Aire, Luz, Ruido, Domótica)",
		image1: "images/productos/A1_1.jpg",
		image2: "images/productos/A1_2.jpg",
		image3: "images/productos/A1_3.jpg",
		href: "/a1"
	},
	{
		id: "lamp-holder",
		name: "Adaptadores para Lámparas",
		description: "(E27, Control Remoto RF) Simples / Kit de 4",
		image1: "images/productos/Lamp_Holder_1.jpg",
		image2: "images/productos/Lamp_Holder_2.jpg",
		image3: "images/productos/Lamp_Holder_3.jpg",
		href: "/lampholders"
	},
	{
		id: "tactil-switch",
		name: "Interruptores Táctiles RF",
		description: "(Panel de vidrio, Control Remoto RF)",
		image1: "images/productos/Interruptores_1.jpg",
		image2: "images/productos/Interruptores_2.jpg",
		image3: "images/productos/Interruptores_3.jpg",
		href: "/tactilswitch"
	},
	{
		id: "accesories",
		name: "Accesorios",
		description: "(Sensores, Controles Remotos RF)",
		image1: "images/productos/Accesorios.jpg",
		image2: "",
		image3: "",
		href:"/accesories"
	}
];

var rmMini_3 = {
	title: "Control Universal Wifi Broadlink Rm Mini3",
	id: "rm-mini-3",
	href:"http://articulo.mercadolibre.com.uy/MLU-445151557-control-universal-wifi-broadlink-rm-mini3-controla-tu-casa-_JM",
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
	title: "Control Universal Wifi Broadlink Rm Pro4",
	id:"rm-pro",
	href:"http://articulo.mercadolibre.com.uy/MLU-445119162-control-universal-wifi-broadlink-rm-pro4-controla-tu-casa-_JM",
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
	title: "Sensor De Ambiente Ifttt Broadlink A1",
	id: "a1",
	href:"http://articulo.mercadolibre.com.uy/MLU-445572926-sensor-de-ambiente-ifttt-broadlink-a1-controla-tu-casa-_JM",
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
	title: "Enchufes Inteligentes",
	headerImg:"images/switches/1.jpg",
	products: [

		{
			id: "sp3",
			name: "Enchufe/Timer Smart Wifi Broadlink Sp3",
			description: "Tipo F (Schuko)",
			image1: "images/productos/Smart_Switch_3.jpg",
			href: "/sp3"
		},
		{
			id: "sp-mini3",
			name: "Enchufe/Timer Wifi Broadlink Sp Mini3",
			description: "Tipo I (Cruzados)",
			image1: "images/productos/Smart_Switch_2.jpg",
			href: "/spmini"
		},
		{
			id: "sp2",
			name: "Enchufe/Timer Smart Wifi Broadlink Sp2",
			description: "Tipo C (En Linea)",
			image1: "images/productos/Smart_Switch_1.jpg",
			href: "/sp2"
		}
	]
};

var sp2 = {
	title: "Enchufe / Timer Smart Wifi Broadlink Sp2",
	id: "sp2",
	href:"http://articulo.mercadolibre.com.uy/MLU-445400857-enchufe-timer-smart-wifi-broadlink-sp2-controla-tu-casa-_JM",
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
	title: "Enchufe / Timer Smart Wifi Broadlink Sp3",
	id: "sp3",
	href:"http://articulo.mercadolibre.com.uy/MLU-445401845-enchufe-timer-smart-wifi-broadlink-sp3-controla-tu-casa-_JM",
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
	title: "Enchufe / Timer Wifi Broadlink Sp Mini3",
	id: "spmini",
	href: "http://articulo.mercadolibre.com.uy/MLU-445395044-enchufe-timer-wifi-broadlink-sp-mini3-controla-tu-casa-_JM",
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

var alarmKit = {
	title: "Kit Alarma Smart Broadlink S1 Wifi",
	id: "alarm-kit",
	href:"http://articulo.mercadolibre.com.uy/MLU-445592451-kit-alarma-smart-broadlink-s1-wifi-a-cel-controla-tu-casa-_JM",
	headerImg: "images/alarmKit/1.jpg",
	images: [
		{
			src: "images/alarmKit/2.jpg",
			alt: "",
			text: ""
		},
		{
			src: "images/alarmKit/3.jpg",
			alt: "",
			text: ""
		},
		{
			src: "images/alarmKit/4.jpg",
			alt: "",
			text: ""
		},
		{
			src: "images/alarmKit/5.jpg",
			alt: "",
			text: ""
		},
		{
			src: "images/alarmKit/6.jpg",
			alt: "",
			text: ""
		},
		{
			src: "images/alarmKit/7.jpg",
			alt: "",
			text: ""
		},
		{
			src: "images/alarmKit/8.jpg",
			alt: "",
			text: ""
		},
		{
			src: "images/alarmKit/9.jpg",
			alt: "",
			text: ""
		}
	],
	datosTecnicos: {
		esp: {
			headers1: ["Voltaje de Entrada:","Temp de funcionamiento:","Frecuencia WiFi:","Radio Frecuencia:","Frecuencia RF:"],
			values1: ["100-240v AC, 50/60hz","0~50℃", "2.4 GHz 802.11b/g/n","433.92MHz","-110dB"],
			headers2: ["Capacidad Sensores:","Humedad de funcionamiento:","Consumo en Standby:","Protocolo RF:"],
			values2: ["Hasta 16","≤85%RH","≤1.1W","Protocolo RF Broadlink"]
		},
		dimensions: "58mm (alto) × 44mm (ancho) × 75mm (profundidad) sin contar enchufe, 55mm (profundidad) total",
		materials: "ABS Clase V0 Resistente al Fuego, Tapa Acrílica",
		characteristics:[
			"Compacto",
			"Compatible con iOS/Android/Windows Phone (Utilizando Apk de Android)",
			"Acceso a través de WiFi/3G/4G sin ninguna configuración complicada en su Router",
			"Incluye 1 Sensor de Puerta/Ventana y 1 Sensor de Movimiento.",
			"Expandible hasta 16 sensores",
			"Control Remoto con Opciones de Armado Completo, Armado Parcial (por zonas), Desarmado y Emergencia SOS",
			"Cientos de usos con Interacción Tipo IFTTT (If This, Then That) utilizando Broadlink RM, RM Mini y Enchufes SP a través del movimiento o apertura de puertas o ventanas.",
			"Notificaciones a Smartphone configurables en Tiempo Real",
			"Historial de Eventos",
			"Activación con voz si se utiliza con App Intermedia RM Tasker"
		]
	}
};

var lampHolders= {
	title: "Adaptadores para lámparas",
	headerImg:"images/lampHolders/1.png",
	products: [

		{
			id: "lh01",
			name: "Portalámparas Smart A Control Remoto Rf",
			description: "",
			image1: "images/productos/Lamp_Holder_1.jpg",
			href: "/lh01"
		},
		{
			id: "lh04",
			name: "Portalámparas Smart X4 Control Remoto Rf",
			description: "",
			image1: "images/lampHolders/LH04/2.jpg",
			href: "/lh04"
		}
	]
};

var lh01 = {
	title: "Portalámparas Smart A Control Remoto Rf",
	id: "lh01",
	href: "http://articulo.mercadolibre.com.uy/MLU-445740392-portalamparas-smart-a-control-remoto-rf-controla-tu-casa-_JM",
	headerImg: "images/lampHolders/LH01/1.png",
	images: [
		{
			src: "images/lampHolders/LH01/2.jpg",
			alt: "",
			text: ""
		},
		{
			src: "images/lampHolders/LH01/3.jpg",
			alt: "",
			text: ""
		},
		{
			src: "images/lampHolders/LH01/4.jpg",
			alt: "",
			text: ""
		},
		{
			src: "images/lampHolders/LH01/5.jpg",
			alt: "",
			text: ""
		}
	],
	datosTecnicos: {
		esp: {
			headers1: ["Voltaje de Entrada:","Tipo de Pase:","Radio Frecuencia:", "Distancia de Operación:"],
			values1: ["220v AC, 50/60hz","E27", "315MHz","20m"],
			headers2: ["Pot Max Incandescentes:","Pot Max Bajo Con/LED:","Consumo en Standby:","Certificación"],
			values2: ["1000W","300W","≤0.015W","CE, CCC, ROHS"]
		},
		dimensions: "1105mm (alto) × 70mm (ancho), Control Remoto 95mm (alto) x 38mm (ancho)",
		materials: "Hierro, Latón, ABS",
		characteristics:[
			"Compacto",
			"Pase E27",
			"Fácil instalación",
			"Apta para luces de techo y Lámparas Portátiles",
			"Compatible con todo tipo de Lámparas Incandescentes, Bajo Consumo, LED, etc",
			"Control Remoto Programable con pila incluída",
			"Posibilidad de ser comandado fuera de su hogar mediante el Control Universal Broadlink RM Pro",
			"Posibilidad de ser encendido automáticamente si se detecta oscuridad a una hora programada utilizando el Sensor de Ambiente Broadlink A1",
			"Posibilidad de ser encendido automáticamente si se detecta movimiento, o apertura de puerta o ventana utilizando el Kit de Alarma Broadlink S1",
			"Activación con voz si se utiliza con Broadlink RM Pro y App Intermedia RM Tasker"
		]
	}
};

var lh04 = {
	title: "Portalámparas Smart X4 Control Remoto Rf",
	id: "lh04",
	href: "http://articulo.mercadolibre.com.uy/MLU-445742458-portalamparas-smart-x4-control-remoto-rf-controla-tu-casa-_JM",
	headerImg: "images/lampHolders/LH04/1.png",
	images: [
		{
			src: "images/lampHolders/LH04/2.jpg",
			alt: "",
			text: ""
		},
		{
			src: "images/lampHolders/LH04/3.jpg",
			alt: "",
			text: ""
		},
		{
			src: "images/lampHolders/LH04/4.jpg",
			alt: "",
			text: ""
		},
		{
			src: "images/lampHolders/LH04/5.jpg",
			alt: "",
			text: ""
		}
	],
	datosTecnicos: {
		esp: {
			headers1: ["Voltaje de Entrada:","Tipo de Pase:","Radio Frecuencia:", "Distancia de Operación:"],
			values1: ["220v AC, 50/60hz","E27", "315MHz","20m"],
			headers2: ["Pot Max Incandescentes:","Pot Max Bajo Con/LED:","Consumo en Standby:","Certificación"],
			values2: ["1000W","300W","≤0.015W","CE, CCC, ROHS"]
		},
		dimensions: "1105mm (alto) × 70mm (ancho), Control Remoto 95mm (alto) x 38mm (ancho)",
		materials: "Hierro, Latón, ABS",
		characteristics:[
			"Kit de 4 Unidades",
			"Compacto",
			"Pase E27",
			"Fácil instalación",
			"Apta para luces de techo y Lámparas Portátiles",
			"Compatible con todo tipo de Lámparas Incandescentes, Bajo Consumo, LED, etc",
			"Control Remoto Programable con pila incluída",
			"Posibilidad de ser comandado fuera de su hogar mediante el Control Universal Broadlink RM Pro",
			"Posibilidad de ser encendido automáticamente si se detecta oscuridad a una hora programada utilizando el Sensor de Ambiente Broadlink A1",
			"Posibilidad de ser encendido automáticamente si se detecta movimiento, o apertura de puerta o ventana utilizando el Kit de Alarma Broadlink S1",
			"Activación con voz si se utiliza con Broadlink RM Pro y App Intermedia RM Tasker"
		]
	}
};

var accesories= {
	title: "Adaptadores para lamparas",
	headerImg:"images/accesories/header.png",
	products: [
		{
			id: "doorsensor",
			name: "Sensor De Aberturas Inalámbrico Para Kit Alarma",
			description: "",
			image1: "images/accesories/DoorSensorS1/1.jpg",
			href: "/doorsensor"
		},
		{
			id: "hometouch1",
			name: "Control Remoto Análogo para Interruptor",
			description: "",
			image1: "images/accesories/HomeTouch1/1.jpg",
			href: "/hometouch1"
		},
		{
			id: "hometouch2",
			name: "Control Remoto Táctil para Interruptor",
			description: "",
			image1: "images/accesories/HomeTouch2/1.jpg",
			href: "/hometouch2"
		},
		{
			id: "motionSensor",
			name: "Sensor De Movimiento Inálambrico Para Alarma",
			description: "",
			image1: "images/accesories/motionSensorS1/1.jpg",
			href: "/motionsensor"
		},
		{
			id: "remotes1",
			name: "Control Remoto Adicional Rf Para Kit Alarma",
			description: "",
			image1: "images/accesories/RemoteS1/1.jpg",
			href: "/remote1"
		}
	]
};

var doorsensor = {
	title: "Sensor De Aberturas Inalámbrico Para Kit Alarma Broadlink S1",
	id: "doorsensor",
	href: "http://articulo.mercadolibre.com.uy/MLU-445803687-sensor-de-aberturas-inalambrico-para-kit-alarma-broadlink-s1-_JM",
	headerImg: "images/accesories/header.png",
	images: [
		{
			src: "images/accesories/DoorSensorS1/1.jpg",
			alt: "",
			text: ""
		}
	],
	datosTecnicos: {
		esp: {
			headers1: ["Voltaje de Entrada:","Autonomía:","Temp de funcionamiento:", "Frecuencia RF:"],
			values1: ["3V DC (2 pilas AAA)","2 a 3 años c/Alcalinas", "-10~50℃","433mhz/315mhz"],
			headers2: ["Pot Max Incandescentes:","Pot Max Bajo Con/LED:","Consumo en Standby:","Certificación"],
			values2: ["1000W","300W","≤0.015W","CE, CCC, ROHS"]
		},
		dimensions: "Sensor 76mm (alto) × 36mm (ancho) × 18mm (profundidad), Imán  76mm (alto) × 12.5mm (ancho) × 18mm (profundidad)",
		materials: "ABS Clase V0 Resistente al Fuego",
		characteristics:[
			"Compacto",
			"Fácil configuración con Kit Alarma Broadlink S1, se agrega mediante Código QR",
			"Dispara Alerta instantánea a Modulo Madre de Kit S1 en caso de Apertura de Puertas o Ventanas ",
			"LED indicador de funcionamiento",
			"Estado de batería",
			"Alerta de obstrucción/desarme del sensor si la alarma esta activada",
			"Gran autonomía de 2 a 3 años con Pilas Alcalinas de buena calidad",
			"Incluye Cinta doble Faz 3M para fácil instalación",
			"Incluye Tornillos y Tacos Fischer 6mm para instalación profesional ",
			"Pilas No Incluidas"
		]
	}
};

var hometouch1 = {
	title: "Control Remoto Análogo para Interruptor",
	id: "hometouch1",
	href: "",
	headerImg: "images/accesories/header.png",
	images: [
		{
			src: "images/accesories/HomeTouch1/1.jpg",
			alt: "",
			text: ""
		}
	],
	datosTecnicos: {
		esp: {
			headers1: ["Voltaje de Entrada:","Temp de funcionamiento:"],
			values1: ["12V DC (1 pila 27A)", "0~50℃"],
			headers2: ["Frecuencia RF:","Distancia de Operación"],
			values2: ["433mhz","30m máx."]
		},
		dimensions: "40mm (alto) × 25mm (ancho) × 15mm (profundidad)",
		materials: "ABS, Metal",
		characteristics:[
			"Compacto",
			"Maneja 3 Luces",
			"Botón de \“Apagar Todas\”",
			"LED indicador de funcionamiento",
			"Tapa de Seguridad para Niños",
			"Enganche para llaves",
			"Pila Incluida"
		]
	}
};

var hometouch2 = {
	title: "Control Remoto táctil para interruptor",
	id: "hometouch2",
	href:"",
	headerImg: "images/accesories/header.png",
	images: [
		{
			src: "images/accesories/HomeTouch2/1.jpg",
			alt: "",
			text: ""
		}
	],
	datosTecnicos: {
		esp: {
			headers1: ["Voltaje de Entrada:","Temp de funcionamiento:"],
			values1: ["12V DC (1 pila 27A)", "0~50℃"],
			headers2: ["Frecuencia RF:","Distancia de Operación"],
			values2: ["433mhz","30m máx."]
		},
		dimensions: "120mm (alto) × 50mm (ancho) × 15mm (profundidad)",
		materials: "ABS, Cristal",
		characteristics:[
			"Compacto",
			"Compatible con Interruptores HomeTouch",
			"Botones Táctiles ",
			"Indicador de Luces Encendidas",
			"Maneja 5 Luces",
			"Botón de \“Apagar Todas\”",
			"Función Dimmer para Interruptores HomeTouch compatibles",
			"Modo hibernación luego de 20m de inactividad",
			"Escenas (un botón activa una o más luces)",
			"Pilas Incluidas"
		]
	}
};

var motionsensor = {
	title: "Sensor De Movimiento Inálambrico Para Alarma Broadlink S1",
	id: "motionsendor",
	href: "http://articulo.mercadolibre.com.uy/MLU-445803956-sensor-de-movimiento-inalambrico-para-alarma-broadlink-s1-_JM",
	headerImg: "images/accesories/header.png",
	images: [
		{
			src: "images/accesories/MotionSensorS1/1.jpg",
			alt: "",
			text: ""
		}
	],
	datosTecnicos: {
		esp: {
			headers1: ["Voltaje de Entrada:","Autonomía:","Temp de funcionamiento:", "Frecuencia RF:","Altura de Instalación:"],
			values1: ["3V DC (2 pilas AA)","2 años c/Alcalinas", "-20~50℃","433mhz/315mhz","2.2m a 2.7m"],
			headers2: ["Distancia de operación:","Área de Detección:","Consumo en Standby:","Consumo en funcionamiento:"],
			values2: ["30m max","12m y 90°","≤15uA","≤15mA"]
		},
		dimensions: "108mm (alto) × 62mm (ancho) × 43mm (profundidad)",
		materials: "ABS Clase V0 Resistente al Fuego",
		characteristics:[
			"Compacto",
			"Fácil configuración con Kit Broadlink S1, se agrega mediante Código QR",
			"Dispara Alerta instantánea a Modulo Madre de Kit S1 en caso de detectar Movimiento ",
			"Sistema de Anti Falsas Alarmas",
			"LED indicador de funcionamiento",
			"Estado de batería",
			"Alerta de obstrucción/desarme del sensor si la alarma esta activada",
			"Gran autonomía de 2 años con Pilas Alcalinas de buena calidad",
			"Incluye Tornillos, Tacos Fischer 6mm y soporte articulado para instalación profesional",
			"Pilas No Incluidas"
		]
	}
};

var remote1 = {
	title: "Control Remoto Adicional Rf Para Kit Alarma Broadlink S1",
	id: "remote1",
	href: "http://articulo.mercadolibre.com.uy/MLU-445803992-control-remoto-adicional-rf-para-kit-alarma-broadlink-s1-_JM",
	headerImg: "images/accesories/header.png",
	images: [
		{
			src: "images/accesories/RemoteS1/1.jpg",
			alt: "",
			text: ""
		}
	],
	datosTecnicos: {
		esp: {
			headers1: ["Voltaje de Entrada:","Temp de funcionamiento:", "Frecuencia RF:"],
			values1: ["3V DC (1 CR2032)","0~50℃", "433mhz/315mhz"],
			headers2: ["Distancia de operación:","Consumo en Standby:","Consumo en funcionamiento:"],
			values2: ["30m max","≤1uA","≤15mA"]
		},
		dimensions: "57mm (alto) × 30mm (ancho) × 8.5mm (profundidad)",
		materials: "ABS Clase V0 Resistente al Fuego",
		characteristics:[
			"Compacto",
			"Fácil configuración con Kit Broadlink S1, se agrega mediante Código QR",
			"Funciones de Armado, Armado por Zonas (configurable), Desarmado, Emergencia SOS",
			"LED indicador de funcionamiento",
			"Enganche para llaves",
			"Pila No Incluida"
		]
	}
};

var tactilSwitch = {
	title: "Interruptores táctiles",
	id:"tactil-switch",
	href: "http://articulo.mercadolibre.com.uy/MLU-444453384-nueva-generacion-de-llaves-de-luz-interruptores-touch-_JM",
	headerImg: "images/interruptores/3.jpg",
	images: [
		{
			src: "images/interruptores/2.jpg",
			alt: "",
			text: ""
		},
		{
			src: "images/interruptores/1.jpg",
			alt: "",
			text: ""
		},
		{
			src: "images/interruptores/4.jpg",
			alt: "",
			text: ""
		},
		{
			src: "images/interruptores/5.jpg",
			alt: "",
			text: ""
		},
		{
			src: "images/interruptores/6.jpg",
			alt: "",
			text: ""
		},
		{
			src: "images/interruptores/7.jpg",
			alt: "",
			text: ""
		},
		{
			src: "images/interruptores/8.jpg",
			alt: "",
			text: ""
		},
		{
			src: "images/interruptores/9.jpg",
			alt: "",
			text: ""
		},
		{
			src: "images/interruptores/10.jpg",
			alt: "",
			text: ""
		},
		{
			src: "images/interruptores/11.jpg",
			alt: "",
			text: ""
		}
	],
	datosTecnicos: {
		esp: {
			headers1: ["Voltaje de Entrada:","Colores:","Radio Frecuencia:","Distancia de operación:"],
			values1: ["110v-220v AC, 50/60hz","Blanco/Negro","433MHz", "30m"],
			headers2: ["Temp de Funcionamiento:","Max Potencia Lámpara:","Consumo en Standby:","Certificación:"],
			values2: ["-30~70℃","1000W","≤0.1mW","CE, ROHS"]
		},
		dimensions: "118mm (alto) × 72mm (ancho) Medida Standard",
		materials: "Cristal, ABS",
		characteristics:[
			"Botón Touch Capacitivo",
			"Cristal de Alta Calidad Anti Rayas",
			"No se desgasta",
			"Fácil limpieza",
			"Fácil instalación",
			"Disponibles en 1, 2, 3 o 4 Botones.",
			"Indicador de estado Rojo=ON, Azul=OFF",
			"Modelos con distintas funciones: Standard, Control Remoto, Escalera, Dimmer, Dimmer+Control, ",
			"Compatible con todo tipo de Lámparas Incandescentes, Bajo Consumo, LED, etc",
			"Posibilidad de ser comandado fuera de su hogar mediante el Control Universal Broadlink RM Pro",
			"Posibilidad de ser encendido automáticamente si se detecta oscuridad a una hora programada utilizando el Sensor de Ambiente Broadlink A1",
			"Posibilidad de ser encendido automáticamente si se detecta movimiento, o apertura de puerta o ventana utilizando el Kit de Alarma Broadlink S1",
			"Activación con voz si se utiliza con Broadlink RM Pro y App Intermedia RM Tasker"
		]
	}
};

router.get('/health', function(req, res, next) {
  res.send({ health: "active" });
});

router.get('/buy', function(req, res, next) {
  res.render('buy', product);
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

router.get('/alarmkit', function(req, res, next) {
  res.render('product', alarmKit);
});

router.get('/usos', function(req, res, next) {
  res.render('usos', { usos: "active" });
});

router.get('/lampholders', function(req, res, next) {
  res.render('subproducts', lampHolders);
});

router.get('/lh01', function(req, res, next) {
  res.render('product', lh01);
});

router.get('/lh04', function(req, res, next) {
  res.render('product', lh04);
});

router.get('/accesories', function(req, res, next) {
  res.render('subproducts', accesories);
});

router.get('/doorsensor', function(req, res, next) {
  res.render('product', doorsensor);
});

router.get('/hometouch1', function(req, res, next) {
  res.render('product', hometouch1);
});

router.get('/hometouch2', function(req, res, next) {
  res.render('product', hometouch2);
});

router.get('/motionsensor', function(req, res, next) {
  res.render('product', motionsensor);
});

router.get('/remote1', function(req, res, next) {
  res.render('product', remote1);
});

router.get('/tactilswitch', function(req, res, next) {
  res.render('product', tactilSwitch);
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
