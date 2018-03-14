var express = require('express');
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');
var app = express();
const PORT = 3000;
const RECEIVER_EMAIL = 'tharindu199411@gmail.com';

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header('Access-Control-Allow-Methods', 'GET,POST');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}

app.use(allowCrossDomain);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/sendMail',function(req,res){

		var transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
			  user: 'sistourserver@gmail.com',
			  pass: 'sistourtest'
			}
		});


	  var mailOptions = {
		from: 'sistourserver@gmail.com',
		to: RECEIVER_EMAIL,
		subject: 'Contact Us Requests',
		html: req.body.mailBody
	  };

	  var resObject = {
		  status : 0,
		  responseMessage : null,
	  };

	  transporter.sendMail(mailOptions, function(error, info){
		if (error) {
			if(error.code === 'ECONNECTION'){
				resObject.status = 304;
				resObject.responseMessage = 'Connection Error'
				//res.status(304).json(resObject);
				res.send(resObject);
			}else{
				resObject.status = 304;
				resObject.responseMessage = 'An error occured while sending email.';
				//res.status(304).json(resObject);
				res.send(resObject);
			}

		} else {
				resObject.status = 200;
				resObject.responseMessage = 'Email Successfully sent.';
				//res.status(200).json(resObject);
				res.send(resObject);
		}
	  });
})

var server = app.listen(PORT,function(){
	console.log("Server listen on Port Number " + PORT);
});
