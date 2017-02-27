'use strict';

const express = require('express');
const requestInfo = require('./lib/request-info');

const app = express();

app.get('/', (req, res) => {

    const info = {
        ipaddress: requestInfo.getIpAddress(req) || '',
        language: requestInfo.getLanguage(req) || '',
        software: requestInfo.getBrowserInfo(req) || ''
    };

    res.json(info);

});

let listener = app.listen(process.env.PORT || 3000, () => {
    console.log(`Running at port ${listener.address().port}`);
});

module.exports = app;