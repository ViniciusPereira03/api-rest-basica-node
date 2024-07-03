const express = require('express');
const produtosService = require('../service/produtos.js')

const router = express.Router();

router.get('/', produtosService.get);
router.post('/', produtosService.add);

module.exports = router;
