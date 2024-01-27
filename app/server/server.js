const express = require('express');
const mysql = require('mysql')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')


const app = express();
app.use(express.json());
app.use(cors(
    {
    origin: "http://localhost:3000/",
    methods: ["POST, GET"],
    credentials: true
    }
))

const db = mysql.createConnection({
    host: "192.168.178.43",
    user: "x3pc092201",
    password: "cr0nicalz96",
    database: "userdata"
})


app.post("login", (req, res) => {
    const sql = "SELECT * FROM LOGIN WHERE Username = ? AND Password = ?"
    db.query(sql, [req.body.username, req.body.password], (err, data) => {
        if(err) return res.json({Message: "Servside Error"});
        if(data.length > 0) {
            const username = data[0].username;
            const token = jwt.sign({username}, "our-jsonwebtoken-secret-key", {expiresIn: '1d'});
            res.cookie("roken", token);
            return res.json({Status: "Success"})

        } else {
            return res.json({Message: "NO Records existed"});
        }
    })
})


app.listen(8081, ()=> {
    console.log("Running")
})