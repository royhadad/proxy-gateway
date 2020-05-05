const express = require('express');
var proxy = require('express-http-proxy');

ports = {
    weather: 5001,
    auth: 5002
}
const serverDomain = process.env.SERVER_URL;
const app = new express();
app.use(express.json());

app.use('/auth', proxy(`${serverDomain}:${ports['auth']}`));
app.use('/weather', proxy(`${serverDomain}:${ports['weather']}`));

module.exports = app;