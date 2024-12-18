const express = require('express');
const pool = require('./config/database');
const XLSX = require('xlsx'); 

const app = express();
app.use(express.json());

app.get('/pollution', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM pollution_data');
    res.json(result.rows);
  } catch (error) {
    res.status(500).send('Error fetching data');
  }
});

app.post('/pollution', async (req, res) => {
  const { location, value } = req.body;
  try {
    await pool.query('INSERT INTO pollution_data (location, value) VALUES ($1, $2)', [location, value]);
    res.status(201).send('Data added');
  } catch (error) {
    res.status(500).send('Error inserting data');
  }
});

app.get('/export', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM pollution_data');
    const data = result.rows;

    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Poluição");

    const excelFile = XLSX.write(wb, { bookType: 'xlsx', type: 'buffer' });

    res.setHeader('Content-Disposition', 'attachment; filename=dados_polluicao.xlsx');
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    
   a
    res.send(excelFile);
  } catch (error) {
    res.status(500).send('Error generating Excel file');
  }
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
