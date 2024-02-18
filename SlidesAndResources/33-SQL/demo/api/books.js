const express = require("express");
const bookRouter = express.Router();

const {
  createBook,
  deleteBook,
  getAllBooks,
  getBookById,
  updateBook,
} = require("../db");

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

//POST /api/books - create new book
bookRouter.post("/", async (req, res) => {
  try {
    const book = await createBook(req.body);
    res.send(book);
  } catch (error) {
    res.status(500).send({ error });
  }
});

//PUT /api/books/:id - update book by id
bookRouter.put("/:id", async (req, res) => {
  try {
    const book = await updateBook(req.params.id, req.body);
    res.send(book);
  } catch (error) {
    res.status(500).send({ error });
  }
});

//Delete /api/books/:id - delete book by id
bookRouter.delete("/:id", async (req, res) => {
  try {
    const book = await deleteBook(req.params.id);
    res.send(book);
  } catch (error) {
    res.status(500).send({ error });
  }
});

module.exports = bookRouter;
