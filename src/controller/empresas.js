const express = require('express');
const empresasService = require('../service/empresas.js')

const router = express.Router();

router.get('/', empresasService.get);
router.post('/', empresasService.add);

module.exports = router;
