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
  //try to insert the values into the books table
  //return the newly created book
};

//delete a book by the provided book id
const deleteBook = async (bookId) => {
  //try to delete a book by the id provided
  //return the deleted book
};

//return all books in the database
const getAllBooks = async () => {
  //try to get all books in the database
  //return the list of books
};

//get a book by the provided book id
const getBookById = async (bookId) => {
  //try to get a book by the id provided
  //return the book
};

//update a book with the provided book id and the fields to change changes
const updateBook = async (bookId, fields = {}) => {
  // build the string to apply the changes
  const changeString = Object.keys(fields)
    .map((key, index) => `"${key}"=$${index + 1}`)
    .join(", ");

  // return early if this is called without fields

  //try to insert the new values into the books table where the id matches

  //return the updated book
};

module.exports = {
  createBook,
  deleteBook,
  getAllBooks,
  getBookById,
  updateBook,
};
