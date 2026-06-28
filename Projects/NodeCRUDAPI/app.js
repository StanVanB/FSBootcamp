/* Test script: connects to MySQL via ./connection.js and runs a simple query
   Usage: set DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_CONN_LIMIT (or rely on defaults)
   Run: node app.js
*/
const { pool, query } = require('./connection');

(async () => {
  try {
    const rows = await query('SELECT 1 AS ok');
    console.log('Result:', rows);
    console.log('MySQL connected!');
  } catch (err) {
    console.error('MySQL connection error:', err);
  } finally {
    try {
      await pool.end();
    } catch (e) {}
  }
})();
