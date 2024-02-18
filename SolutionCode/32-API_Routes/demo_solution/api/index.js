const express = require('express');
const router = express.Router();

const productsRouter = require('./products');

router.use('/products', productsRouter);

router.get("/health", (req, res) => {
  res.send("Server is running!");
})

module.exports = router;
