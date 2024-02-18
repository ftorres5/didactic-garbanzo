const express = require("express");
const movieRouter = express.Router();

const {
  createMovie,
  deleteMovie,
  getAllMovies,
  getMovieById,
  updateMovie,
} = require("../db");

//GET /api/movies - get all movies
movieRouter.get("/", async (req, res) => {
  try {
    const movies = await getAllMovies();
    res.send(movies);
  } catch (error) {
    res.status(500).send({ error });
  }
});

//GET /api/movies/:id - get movie by id
movieRouter.get("/:id", async (req, res) => {
  try {
    const movie = await getMovieById(req.params.id);
    res.send(movie);
  } catch (error) {
    res.status(500).send({ error });
  }
});

//POST /api/movies - create new movie
movieRouter.post("/", async (req, res) => {
  try {
    const movie = await createMovie(req.body);
    res.send(movie);
  } catch (error) {
    res.status(500).send({ error });
  }
});

//PUT /api/movies/:id - update movie by id
movieRouter.put("/:id", async (req, res) => {
  try {
    const movie = await updateMovie(req.params.id, req.body);
    res.send(movie);
  } catch (error) {
    res.status(500).send({ error });
  }
});

//Delete /api/movies/:id - delete movie by id
movieRouter.delete("/:id", async (req, res) => {
  try {
    const movie = await deleteMovie(req.params.id);
    res.send(movie);
  } catch (error) {
    res.status(500).send({ error });
  }
});

module.exports = movieRouter;
