const express = require("express");
const router = express.Router();

//Router: /api/books
router.use("/books", require("./books"));

//Router: /api/auth
router.use("/auth", require("./auth"));

module.exports = router;
