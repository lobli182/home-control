var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
	service: "gmail",
	host: "smtp.gmail.com",
	auth: {
		user: '', // Your email id
		pass: '' // Your password
	}
});

router.post('/sendMsg', function (req, res) {
	console.log(req);
	var data = req.body;
	console.log(data);

	var mailOptions = {
	    from: data.email, // sender address
	    to: 'homecontroluruguay@gmail.com', // list of receivers
	    subject: 'Consulta: ' + data.subject, // Subject line
	    text: data.name + " (" + data.email + "): \n" + data.message //, // plaintext body
	    // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
	};

	transporter.sendMail(mailOptions, function(error, info){
	    if(error) {
	        console.log(error);
	        res.send("error");
	    } else {
	        console.log('Message sent: ' + info.response);
	        res.send("ok");
	    }
	});
});

module.exports = router;
