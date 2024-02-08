const express = require('express');
const app = express();
const PORT = 8000;

let albums = {
  "kid a": {
    "Artist": "Radiohead",
    "Label": "EMI",
    "Length": "49:56",
    "Certified": "Platinum"
  },
  "Stankonia": {
    "Artist": "Outkast",
    "Label": "LaFace Records",
    "Length": "73:07",
    "Certified": "Platinum"
  },
  "Stories from the City, Stories from the Sea": {
    "Artist": "PJ Harvey",
    "Label": "Linford Manor",
    "Length": "47:25",
    "Certified": "none"
  },
  "Voodoo": {
    "Artist": "D'Angelo",
    "Label": "Electric Lady",
    "Length": "78:54",
    "Certified": "Platinum"
  },
  "The Moon and Antarctica": {
    "Artist": "Modest Mouse",
    "Label": "Epic Records",
    "Length": "59:43",
    "Certified": "Gold"
  },
  "unknown": {
    "Artist": "unknown",
    "Label": "unknown",
    "Length": "unknown",
    "Certified": "unknown"
  }
}

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

app.get('/api/:album', (req, res) => {
  const albumName = req.params.album.toLowerCase();
  if(albums[albumName]) res.json(albums[albumName]);
  else res.json(albums[albumName]);
})

app.get('/js/main.js', (req, res) => {
  res.sendFile(__dirname + '/js/main.js');
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})