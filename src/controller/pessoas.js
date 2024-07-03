const express = require('express');
const pessoasService = require('../service/pessoas.js')

const router = express.Router();

router.get('/', pessoasService.get);
router.post('/', pessoasService.add);

module.exports = router;
