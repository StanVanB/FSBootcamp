require('dotenv').config();
const express = require('express');
const { query } = require('./connection');

const app = express();

app.get('/departments', async (req, res) => {
  try {
    const rows = await query('SELECT department_id, department_name FROM departments ORDER BY department_id');
    console.log(rows);
    res.json(rows);
  } catch (err) {
    console.error('Error fetching departments:', err);
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});