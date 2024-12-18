const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgres://xyhjsdti:W3xsRFybLwj7vbMk4EdvLExeJjCPkeHv@kesavan.db.elephantsql.com/xyhjsdti',
});

module.exports = pool;
