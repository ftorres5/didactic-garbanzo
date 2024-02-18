const express = require("express");
const bookRouter = express.Router();

const { getAllBooks, getBookById, updateBook } = require("../db");

//GET /api/books - get all books
bookRouter.get("/", async (req, res) => {
  try {
    const books = await getAllBooks();
    res.send(books);
  } catch (error) {
    res.status(500).send({ error });
  }
});

//GET /api/books/:id - get book by id
bookRouter.get("/:id", async (req, res) => {
  try {
    const book = await getBookById(req.params.id);
    res.send(book);
  } catch (error) {
    res.status(500).send({ error });
  }
});

//PUT /api/books/:id - update book by id
//Allows a registered user to checkout or return a book by id
bookRouter.put("/:id", async (req, res) => {
  if (!req.user) {
    return res.status(401).send("You must be logged in to do that.");
  }

  try {
    const book = await updateBook(req.params.id, {
      available: req.body.available,
      userid: req.user.id,
    });
    res.send(book);
  } catch (error) {
    res.status(500).send({ error });
  }
});

module.exports = bookRouter;
