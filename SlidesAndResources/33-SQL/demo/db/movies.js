const client = require("./client");

/**
 * create a new movie with the following properties
 * title: string
 * genre: string
 * rating: integer
 * in_stock: boolean
 */
const createMovie = async (body) => {
  //get the key values from the body
  //try to insert the values into the movies table
  //return the newly created movie
};

//delete a movie by the provided movie id
const deleteMovie = async (movieId) => {
  //try to delete a movie by the id provided
  //return the deleted movie
};

//return all movies in the database
const getAllMovies = async () => {
  //try to get all movies in the database
  //return the list of movies
};

//get a movie by the provided movie id
const getMovieById = async (movieId) => {
  //try to get a movie by the id provided
  //return the movie
};

//update a movie with the provided movie id and the fields to change changes
const updateMovie = async (movieId, fields = {}) => {
  // build the string to apply the changes
  const changeString = Object.keys(fields)
    .map((key, index) => `"${key}"=$${index + 1}`)
    .join(", ");

  // return early if this is called without fields

  //try to insert the new values into the movies table where the id matches
  //return the updated movie
};

module.exports = {
  createMovie,
  deleteMovie,
  getAllMovies,
  getMovieById,
  updateMovie,
};
