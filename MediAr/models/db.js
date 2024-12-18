const pool = require('../config/database');

const getPollutionData = async () => {
  const query = 'SELECT * FROM pollution_data;';
  const { rows } = await pool.query(query);
  return rows;
};

const addPollutionData = async (data) => {
  const query = 'INSERT INTO pollution_data (location, value, timestamp) VALUES ($1, $2, $3);';
  await pool.query(query, [data.location, data.value, data.timestamp]);
};

module.exports = {
  getPollutionData,
  addPollutionData,
};
