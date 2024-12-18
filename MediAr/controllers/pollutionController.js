const db = require('../models/db');

const getAllData = async (req, res) => {
  try {
    const data = await db.getPollutionData();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter o dado' });
  }
};

const addData = async (req, res) => {
  try {
    const data = req.body;
    await db.addPollutionData(data);
    res.status(201).json({ message: 'Dado adicionado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao adicionar data' });
  }
};

module.exports = {
  getAllData,
  addData,
};
