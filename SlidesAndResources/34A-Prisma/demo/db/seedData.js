const client = require("./client");
const { faker } = require("@faker-js/faker");
const books = require("./booksData");

// remove all tables if they already exist
async function dropTables() {
  try {
    console.log("Dropping All Tables...");
    await client.query(`
      DROP TABLE IF EXISTS books, users;
    `);
  } catch (error) {
    throw error;
  }
}

// build all tables
async function createTables() {
  try {
    console.log("Building All Tables...");
    await client.query(`
        CREATE TABLE users (
          id SERIAL PRIMARY KEY,
          username TEXT UNIQUE NOT NULL,
          password TEXT NOT NULL,
          email TEXT NOT NULL
        );
        CREATE TABLE books (
            id SERIAL PRIMARY KEY,
            title TEXT NOT NULL,
            author TEXT NOT NULL,
            description TEXT NOT NULL, 
            coverImage TEXT NOT NULL,
            available BOOLEAN DEFAULT true,
            userId INTEGER REFERENCES users(id) ON DELETE CASCADE
        );
    `);
  } catch (error) {
    throw error;
  }
}

// create initial data
async function createInitialData() {
  try {
    console.log("Creating Initial User Data...");
    await Promise.all(
      [...Array(5)].map(() =>
        client.query(
          `INSERT INTO users (username, password, email) VALUES ($1, $2, $3);`,
          [
            faker.internet.userName(),
            faker.internet.password(),
            faker.internet.email(),
          ]
        )
      )
    );

    console.log("Creating Initial Book Data...");

    for (let i = 0; i < books.length; i++) {
      const { title, author, description, coverImage, available } = books[i];

      await client.query(
        `
        INSERT INTO books(title, author, description, coverImage, available)
        VALUES($1, $2, $3, $4, $5);`,
        [title, author, description, coverImage, available]
      );
    }
  } catch (error) {
    throw error;
  }
}

// drop tables, create tables, create initial appointments
async function rebuildDB() {
  try {
    client.connect();
    await dropTables();
    await createTables();
    await createInitialData();
  } catch (error) {
    throw error;
  }
}

// export functions
module.exports = {
  rebuildDB,
};
