
// import DB functions
const { getAllProducts, getSingleProductById } = require('../db');

const express = require('express');
const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
      const products = await getAllProducts();
      res.send(products);
  } catch (error) {
      next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
      const product = await getSingleProductById(req.params.id);
      res.send(product);
  } catch (error) {
      next(error);
  }
});

module.exports = router;
