const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const utils = require('rjutils-collection');
const https = require('https');
const http = require('http');
const fs = require('fs');

const app = express();



app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "45.131.109.129",
  user: "urlsapi_userx09",
  password: "XCr0nicalz96!",
  database: "urls_apidb"
});






app.get('/api', (req, res) => {
    res.json({ message: "Hello from server!" });
});

// Listen both http & https ports
const httpServer = http.createServer(app);
const httpsServer = https.createServer({
  key: fs.readFileSync('/etc/letsencrypt/live/blackzspace.de-0001/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/blackzspace.de-0001/fullchain.pem'),

  
}, app);



console.log(`

    ░░██████═╗░██╗░░░░░░░░░░███═╗░░░░░░██████╗░██╗░░██╗░██████╗░███████╗░██████═╗░░░░███═╗░░░░░░██████╗░██████╗░░░░░██████═╗░██████╗░░
    ░░██║░░██╝░██║░░░░░░░░░██╗██╚╗░░░░██═════╝░██║ ██═╝░░░░░██║░██═════╝░██║░░██║░░░██╗██╚╗░░░░██═════╝░██════╝░░░░░██║░░██║░██════╝░░
    ░░██████╚╗░██║░░░░░░░░███████╚╗░░██╚╗░░░░░░█████╚╗░░░░██╔═╝░███████╗░██████╔╝░░███████╚╗░░██╚╗░░░░░░██████╗░░░░░██║░░██║░██████╗░░
    ░░██║░░██║░██║░░░░░░░██╔════██╚╗░░██║░░░░░░██╔═██╚╗░██╔═╝░░░░░░░░██║░██╔═══╝░░██╔════██╚╗░░██║░░░░░░██════╝░░░░░██║░░██║░██════╝░░
    ░░██████╔╝░███████╗░██╔╝░░░░░██║░░░██████╗░██║░░██║░██████╗░███████║░██║░░░░░██╔╝░░░░░██║░░░██████╗░██████╗░██╗░██████╔╝░██████╗░░
    ░░╚═════╝░░╚══════╝░╚═╝░░░░░░╚═╝░░░╚═════╝░╚═╝░░╚═╝░╚═════╝░╚══════╝░╚═╝░░░░░╚═╝░░░░░░╚═╝░░░╚═════╝░╚═════╝░╚═╝░╚═════╝░░╚═════╝░░
    `);


    



httpServer.listen(8080, () => {
    
  console.log("Console > HTTP Running on PORT:  8080")
});



httpsServer.listen(8081, () => {
  console.log("Console > HTTPS Running on PORT:  8081")
});
