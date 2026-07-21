const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;
const getFilePath = (file) => path.join(__dirname, file);

app.get(['/', '/index', '/index.html'], (req, res) => {
  res.sendFile(getFilePath('index.html'));
});

app.get(['/about', '/about.html'], (req, res) => {
  res.sendFile(getFilePath('about.html'));
});

app.get(['/contact-me', '/contact.html'], (req, res) => {
  res.sendFile(getFilePath('contact-me.html'));
});

app.use((req, res) => {
  res.status(404).sendFile(getFilePath('404.html'));
});

app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}/`);
});