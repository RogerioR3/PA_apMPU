const express = require('express');
const router = express.Router();
const controller = require('../controllers/pollutionController');

router.get('/', controller.getAllData);
router.post('/', controller.addData);

module.exports = router;
