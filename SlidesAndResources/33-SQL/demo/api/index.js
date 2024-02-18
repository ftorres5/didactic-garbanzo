const express = require("express");
const router = express.Router();

// GET /api/status
router.get("/status", (req, res, next) => {
  res.send("OK");
});

//Router: /api/books
router.use("/books", require("./books"));

//Router: /api/movies
router.use("/movies", require("./movies"));

module.exports = router;
