const client = require("./client");

/**
 * create a new book with the following properties
 * title: string
 * author: string
 * genre: string
 * in_stock: boolean
 */
const createBook = async (body) => {
  //get the key values from the body
  const { title, author, genre, in_stock, price } = body;

  try {
    //try to insert the values into the books table
    const {
      rows: [book],
    } = await client.query(
      `
        INSERT INTO books(title, author, genre,  in_stock, price)
        VALUES($1, $2, $3, $4, $5)
        RETURNING *;
        `,
      [title, author, genre, in_stock, price]
    );
    //return the newly created book
    return book;
  } catch (error) {
    throw error;
  }
};

//delete a book by the provided book id
const deleteBook = async (bookId) => {
  try {
    //try to delete a book by the id provided
    const {
      rows: [book],
    } = await client.query(
      `
      DELETE FROM books
      WHERE id=$1
      RETURNING *;
    `,
      [bookId]
    );
    //return the deleted book
    return book;
  } catch (error) {
    throw error;
  }
};

//return all books in the database
const getAllBooks = async () => {
  try {
    //try to get all books in the database
    const { rows } = await client.query(`SELECT * FROM books`);
    //return the list of books
    return rows;
  } catch (error) {
    throw error;
  }
};

//get a book by the provided book id
const getBookById = async (bookId) => {
  try {
    //try to get a book by the id provided
    const {
      rows: [book],
    } = await client.query(
      `
      SELECT * FROM books
      WHERE id=$1;
    `,
      [bookId]
    );
    //return the book
    return book;
  } catch (error) {
    throw error;
  }
};

//update a book with the provided book id and the fields to change changes
const updateBook = async (bookId, fields = {}) => {
  // build the string to apply the changes
  const changeString = Object.keys(fields)
    .map((key, index) => `"${key}"=$${index + 1}`)
    .join(", ");

  // return early if this is called without fields
  if (changeString.length === 0) {
    return;
  }

  try {
    //try to insert the new values into the books table where the id matches
    const {
      rows: [book],
    } = await client.query(
      `
      UPDATE books
      SET ${changeString}
      WHERE id=${bookId}
      RETURNING *;
    `,
      Object.values(fields)
    );

    //return the updated book
    return book;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createBook,
  deleteBook,
  getAllBooks,
  getBookById,
  updateBook,
};
