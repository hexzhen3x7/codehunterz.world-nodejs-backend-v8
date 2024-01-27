const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const utils = require('rjutils-collection');
const https = require("https"); 
const fs = require("fs"); 
const app = express();



app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "45.131.109.129",
  user: "x3pc092201",
  password: "cr0nicalz96",
  database: "blackzspacededbx"
});

app.post('/login', (req, res) => {
  const sql = "SELECT * FROM login_table WHERE username = ? AND password = ?";
  const hashed = utils.hashStr({ text: req.body.password, algorithm: 'sha256', output: 'hex' })

  db.query(sql, [req.body.user, hashed], (err, data) => {
    if(err) return res.json("Login failed");
    if(data.length > 0) {
      return res.json({ message: "Login Succesfull!"});
    } else {
      return res.json("No Record!")
    }
  });
});

app.post('/register', (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const hashed = utils.hashStr({ text: req.body.password, algorithm: 'sha256', output: 'hex' })
  db.query("INSERT INTO login_table (username, password, email) VALUES(?, ?, ?)", [username, hashed, email],
  (err, result) => {
    if(result){
      return res.json({message: "Registered!"});
    } else {
      return res.json({message: "ENTER CORRECT ASKED DETAILS"})
    }
  })

});


app.listen(8081, ()=> {
    console.log("Running")
})