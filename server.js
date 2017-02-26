'use strict';

const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.end('Hello world!');
});

let listener = app.listen(process.env.PORT || 3000, () => {
	console.log(`Running at port ${listener.address().port}`);
});