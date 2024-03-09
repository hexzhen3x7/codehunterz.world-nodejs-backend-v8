const fs = require('fs');
const path = require('path');






let date_time = new Date();
let date = ("0" + date_time.getDate()).slice(-2);
let month = ("0" + (date_time.getMonth() + 1)).slice(-2);
let hours = date_time.getHours();
let minutes = date_time.getMinutes();





const readline = require('node:readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });

    


function readContents() {
    const directoryPath = path.join(__dirname, '.logs');
            fs.readdir(directoryPath, function (err, files) {
                if (err) {
                    return console.log('Unable to scan directory: ' + err);
                } 
                files.forEach(function (file) {
                    console.log(file); 
                });
            });
}


function printLogged() {
    const directoryPath = path.join(__dirname, '.logs/visitors');
            fs.readdir(directoryPath, function (err, files) {
                if (err) {
                    return console.log('Unable to scan directory: ' + err);
                } 
                files.forEach(function (file) {
                    console.log(file); 
                });
            });
}



function loop() {
    console.log(hours + ":" + minutes + "-" + month + "-" + date);  

    console.log(`

    ░░██████═╗░██╗░░░░░░░░░░███═╗░░░░░░██████╗░██╗░░██╗░██████╗░███████╗░██████═╗░░░░███═╗░░░░░░██████╗░██████╗░░░░░██████═╗░██████╗░░
    ░░██║░░██╝░██║░░░░░░░░░██╗██╚╗░░░░██═════╝░██║ ██═╝░░░░░██║░██═════╝░██║░░██║░░░██╗██╚╗░░░░██═════╝░██════╝░░░░░██║░░██║░██════╝░░
    ░░██████╚╗░██║░░░░░░░░███████╚╗░░██╚╗░░░░░░█████╚╗░░░░██╔═╝░███████╗░██████╔╝░░███████╚╗░░██╚╗░░░░░░██████╗░░░░░██║░░██║░██████╗░░
    ░░██║░░██║░██║░░░░░░░██╔════██╚╗░░██║░░░░░░██╔═██╚╗░██╔═╝░░░░░░░░██║░██╔═══╝░░██╔════██╚╗░░██║░░░░░░██════╝░░░░░██║░░██║░██════╝░░
    ░░██████╔╝░███████╗░██╔╝░░░░░██║░░░██████╗░██║░░██║░██████╗░███████║░██║░░░░░██╔╝░░░░░██║░░░██████╗░██████╗░██╗░██████╔╝░██████╗░░
    ░░╚═════╝░░╚══════╝░╚═╝░░░░░░╚═╝░░░╚═════╝░╚═╝░░╚═╝░╚═════╝░╚══════╝░╚═╝░░░░░╚═╝░░░░░░╚═╝░░░╚═════╝░╚═════╝░╚═╝░╚═════╝░░╚═════╝░░
    `);


    console.log("===========================================================");
    console.log("== blackzspace.de || BACKEND SERVER || Console           ==");
    console.log("===========================================================");
    console.log("== 1: List LogFiles   || 2: Print Logged IP's            ==");
    console.log("===========================================================");
    console.log("===========================================================");
    console.log("===========================================================");

    readline.question(`Console > `, cmd => {
        console.log(`Choice: ${cmd}`);
        if (cmd == "1") {
            readContents();
        }
        readline.close();
      });

      
}

loop();