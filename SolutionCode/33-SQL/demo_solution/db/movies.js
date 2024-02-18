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
  const { title, genre, rating, in_stock, price } = body;

  try {
    //try to insert the values into the movies table
    const {
      rows: [movie],
    } = await client.query(
      `
        INSERT INTO movies(title, genre, rating,  in_stock, price)
        VALUES($1, $2, $3, $4, $5)
        RETURNING *;
        `,
      [title, genre, rating, in_stock, price]
    );
    //return the newly created movie
    return movie;
  } catch (error) {
    throw error;
  }
};

//delete a movie by the provided movie id
const deleteMovie = async (movieId) => {
  try {
    //try to delete a movie by the id provided
    const {
      rows: [movie],
    } = await client.query(
      `
      DELETE FROM movies
      WHERE id=$1
      RETURNING *;
    `,
      [movieId]
    );
    //return the deleted movie
    return movie;
  } catch (error) {
    throw error;
  }
};

//return all movies in the database
const getAllMovies = async () => {
  try {
    //try to get all movies in the database
    const { rows } = await client.query(`SELECT * FROM movies`);
    //return the list of movies
    return rows;
  } catch (error) {
    throw error;
  }
};

//get a movie by the provided movie id
const getMovieById = async (movieId) => {
  try {
    //try to get a movie by the id provided
    const {
      rows: [movie],
    } = await client.query(
      `
      SELECT * FROM movies
      WHERE id=$1;
    `,
      [movieId]
    );
    //return the movie
    return movie;
  } catch (error) {
    throw error;
  }
};

//update a movie with the provided movie id and the fields to change changes
const updateMovie = async (movieId, fields = {}) => {
  // build the string to apply the changes
  const changeString = Object.keys(fields)
    .map((key, index) => `"${key}"=$${index + 1}`)
    .join(", ");

  // return early if this is called without fields
  if (changeString.length === 0) {
    return;
  }

  try {
    //try to insert the new values into the movies table where the id matches
    const {
      rows: [movie],
    } = await client.query(
      `
      UPDATE movies
      SET ${changeString}
      WHERE id=${movieId}
      RETURNING *;
    `,
      Object.values(fields)
    );
    //return the updated movie
    return movie;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createMovie,
  deleteMovie,
  getAllMovies,
  getMovieById,
  updateMovie,
};
