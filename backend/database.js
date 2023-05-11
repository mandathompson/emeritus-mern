const mysql = require('mysql2')

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'Coleman5809!',
    database: 'notes_app',
  }).promise()

  // Test the connection by running node backend/database.js
//   const result = await pool.query("select * from notes")
//   console.log(result)

const result = await pool.query("select * from notes")
const rows = result[0]
console.log(rows)