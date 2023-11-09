const express = require('express');
const path = require('path');
const app = express();

// Set your IP address and port, default values are here. 
const ipAddress = 'localhost';
const port = 4000;

app.use(express.static(path.join(__dirname, 'www')));

// Serve index.html file on ./www directory.
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'www', 'index.html'));
});

// Listening specified ip adress and port.
app.listen(port, ipAddress, () => {
  console.log(`Sunucu http://${ipAddress}:${port} adresinde çalışıyor.`);
});
