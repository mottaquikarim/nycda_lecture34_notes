const express = require('express');
const expressSession = require('express-session');


const app = express();

app.use(expressSession({
	secret: 'LOLSECRETZ',
	saveUninitialized: false,
	resave: true,
}));

app.get('/foobar', (request, response) => {
	console.log('session is');
	console.log(request.session)
	if (typeof request.session.num === "undefined") {
		request.session.num = 0;
	}
	
	if (request.session.num < 4) {

		++request.session.num;
		response.header('Content-Type', 'text/html');
		response.send(`<h1>Hello, Wrold! ${request.session.num}</h1>`);
	}
	else {
		response.status(404).send('LOL no more')
	}
	
});

app.listen(3001);
