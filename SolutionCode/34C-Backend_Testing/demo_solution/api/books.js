const express = require("express");
const bookRouter = express.Router();
const prisma = require("../db");

//GET /api/books - get all books
bookRouter.get("/", async (req, res) => {
  try {
    const books = await prisma.book.findMany({
      orderBy: {
        title: "asc",
      },
    });
    res.send(books);
  } catch (error) {
    res.status(500).send({ error });
  }
});

//GET /api/books/:id - get book by id
bookRouter.get("/:id", async (req, res) => {
  try {
    const book = await prisma.book.findUnique({
      where: {
        id: parseInt(req.params.id),
      },
    });
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
    const book = await prisma.book.update({
      where: {
        id: parseInt(req.params.id),
      },
      data: {
        available: req.body?.available,
        userid: req.user?.id,
      },
    });
    res.send(book);
  } catch (error) {
    res.status(500).send({ error });
  }
});

module.exports = bookRouter;
