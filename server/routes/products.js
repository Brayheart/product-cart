const express = require('express');

const router = express.Router();

const products = require('../data/product-list.json');

router.get('/all', (req, res) => res.json(products));

module.exports = router;