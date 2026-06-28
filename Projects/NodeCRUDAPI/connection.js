require("dotenv").config();

/* MySQL connection pool using mysql2/promise
   Usage: set DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_CONN_LIMIT in environment
   Install: npm install mysql2
*/
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || "robogarden",
  waitForConnections: true,
  connectionLimit: parseInt(process.env.DB_CONN_LIMIT, 10) || 10,
  queueLimit: 0,
});

async function query(sql, params) {
  const [rows] = await pool.query(sql, params);
  return rows;
}

module.exports = { pool, query };
