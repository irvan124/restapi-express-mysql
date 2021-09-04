const mysql = require("mysql");

// Define the Database (MYSQL)
const db = mysql.createConnection({
  host: `localhost`,
  user: "root",
  password: "root",
  database: "db_kantor",
  port: 3307,
  multipleStatements: true,
});

// Checking the Connection Between Backend Server and Database (MYSQL)
db.connect((err) => {
  if (err) {
    return console.error(`error: ${err.message}`);
  }

  console.log(`Connected to MySQL Server....`);
});

module.exports = { db };
