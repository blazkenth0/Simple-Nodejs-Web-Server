const express = require('express');
const path = require('path');
const app = express();

// IP adresi ve port numarasını ayarla, varsayılan değerler kullanılır
const ipAddress = 'localhost';
const port = 4000;

// www klasöründeki dosyaları sunma
app.use(express.static(path.join(__dirname, 'www')));

// Ana sayfa için index.html dosyasını gönderme
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'www', 'index.html'));
});

// Sunucuyu dinlemeye başlama
app.listen(port, ipAddress, () => {
  console.log(`Sunucu http://${ipAddress}:${port} adresinde çalışıyor.`);
});
