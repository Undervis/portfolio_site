const express = require('express');
const path = require('path');
const fs = require('fs')
const https = require('https')
const app = express();

app.use(express.static(path.join(__dirname, 'static')));

var privateKey = fs.readFileSync('key.pem');
var certificate = fs.readFileSync('cert.pem');
var server = https.createServer({
    key: privateKey,
    cert: certificate
}, app)


app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/static/HTML/index.html`);
});

app.get('/archivarius', (req, res) => {
    res.set('X-Frame-Options', 'GOFORIT')
    res.sendFile(`${__dirname}/static/HTML/archivarius.html`);
});

server.listen(443, () => {
    console.log('App started at 0.0.0.0:80');
});

/*app.listen(80, () => {
    console.log('App started at 0.0.0.0:80');
});*/
