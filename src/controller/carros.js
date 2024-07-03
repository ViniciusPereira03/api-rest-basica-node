const express = require('express');
const carrosService = require('../service/carros.js')

const router = express.Router();

router.get('/', carrosService.get);
router.post('/', carrosService.add);

module.exports = router;
