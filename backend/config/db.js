const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "hakaton"
});

con.connect(function(err) {
  if (err) throw new Error(`Failed to connect with DB ${err.message}`);
  console.log("Connected!");
});

module.exports = con