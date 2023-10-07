const express = require('express');
const https = require('https');
const fs = require('fs');

const app = express();
const port = 3000;

//middleware for handling all routes
app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', 'default-src https:');
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World! This is Practical-15 of AWT');
});

//setting-up the HTTPS server
const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem'),
};

https.createServer(options, app).listen(port, () => {
  console.log(`Server is running on https://localhost:${port}`);
});
