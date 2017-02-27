'use strict';

exports.getIpAddress = function(req) {
    const ipaddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    return ipaddress.split(',')[0];
};

exports.getLanguage = function(req) {
    return req.acceptsLanguages()[0];
};

exports.getBrowserInfo = function(req) {
    let info = req.headers['user-agent'];
  
    // splits at "(" or ")"
    const regex = new RegExp('\\(|\\)');
    
    return info.split(regex)[1];
};