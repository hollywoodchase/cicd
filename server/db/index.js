const { Pool } = require('pg');

const pool = new Pool({
  user: 'danny',
  host: 'localhost',
  database: 'client_db',
  password: 'danny',
  port: 5432, // Default PostgreSQL port
});
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error executing query', err);
  } else {
    console.log('Connected to PostgreSQL database:', res.rows[0].now);
  }
});
