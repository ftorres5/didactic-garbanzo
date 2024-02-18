const prisma = require("./client");

//return all books in the database
const getAllBooks = async () => {
  try {
    //try to get all books in the database
    // const { rows } = await client.query(
    //   `SELECT * FROM books ORDER BY books.title`
    // );

    const books = await prisma.book.findMany({
      orderBy: {
        title: "asc",
      },
    });
    //return the list of books
    return books;
  } catch (error) {
    throw error;
  }
};

//get a book by the provided book id
const getBookById = async (bookId) => {
  try {
    //try to get a book by the id provided
    // const {
    //   rows: [book],
    // } = await client.query(
    //   `
    //   SELECT * FROM books
    //   WHERE id=$1;
    // `,
    //   [bookId]
    // );

    const book = await prisma.book.findUnique({
      where: {
        id: parseInt(bookId),
      },
    });
    //return the book
    return book;
  } catch (error) {
    throw error;
  }
};

//returns all books that belong to the user with the provided id
const getUserBooks = async (userId) => {
  try {
    //try to get all user books
    // const { rows } = await client.query(
    //   `SELECT * FROM books WHERE books.userid=$1 ORDER BY books.title`,
    //   [userId]
    // );

    const books = await prisma.book.findMany({
      where: {
        userid: userId,
      },
      orderBy: {
        title: "asc",
      },
    });

    //return the list of books
    return books;
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
    // const {
    //   rows: [book],
    // } = await client.query(
    //   `
    //   UPDATE books
    //   SET ${changeString}
    //   WHERE id=${bookId}
    //   RETURNING *;
    // `,
    //   Object.values(fields)
    // );

    const book = await prisma.book.update({
      where: {
        id: parseInt(bookId),
      },
      data: fields,
    });

    //return the updated book
    return book;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllBooks,
  getBookById,
  getUserBooks,
  updateBook,
};
