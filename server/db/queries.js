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

const getAllClients = async () => {
  const result = await pool.query('SELECT * FROM clients');
  return result.rows;
};

const getClientById = async (id) => {
  const result = await pool.query('SELECT * FROM clients WHERE id = $1', [id]);
  return result.rows[0];
};

const createClient = async (lastname, firstname, email, typeofproject, image1, image2, image3, size, description) => {
    const result = await pool.query(
      'INSERT INTO clients (lastname, firstname, email, typeofproject, image1, image2, image3, size, description) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
      [lastname, firstname, email, typeofproject, image1, image2, image3, size, description]
    );
    return result.rows[0];
  };

const updateClient = async (id, name, email) => {
  const result = await pool.query('UPDATE clients SET name = $2, email = $3 WHERE id = $1 RETURNING *', [id, name, email]);
  return result.rows[0];
};

const deleteClient = async (id) => {
  const result = await pool.query('DELETE FROM clients WHERE id = $1 RETURNING *', [id]);
  return result.rows[0];
};

module.exports = {
  getAllClients,
  getClientById,
  createClient,
  updateClient,
  deleteClient,
};
