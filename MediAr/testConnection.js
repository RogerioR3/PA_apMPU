const pool = require('./config/database');

(async () => {
  try {
    const result = await pool.query('SELECT NOW();');
    console.log('Conexão bem-sucedida:', result.rows[0]);
  } catch (error) {
    console.error('Erro ao conectar ao banco:', error);
  } finally {
    pool.end();
  }
})();
