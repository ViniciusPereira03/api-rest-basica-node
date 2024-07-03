const express = require('express');
const livrosService = require('../service/livros.js')

const router = express.Router();

router.get('/', livrosService.get);
router.post('/', livrosService.add);

module.exports = router;
