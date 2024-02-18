const client = require("./client");

// remove all tables if they already exist
async function dropTables() {
  try {
    console.log("Dropping All Tables...");
    await client.query(`
      DROP TABLE IF EXISTS books;
      DROP TABLE IF EXISTS movies;
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
        CREATE TABLE books(
            id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            author VARCHAR(255) NOT NULL,
            genre VARCHAR(255) NOT NULL,
            in_stock BOOLEAN DEFAULT true,
            price FLOAT DEFAULT 0
        );
        CREATE TABLE movies(
            id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            genre VARCHAR(255) NOT NULL,
            rating INTEGER NOT NULL,
            in_stock BOOLEAN DEFAULT true, 
            price FLOAT DEFAULT 0
        );
    `);
  } catch (error) {
    throw error;
  }
}

// create initial appointments
async function createInitialAppointments() {
  try {
    console.log("Creating Initial Data...");
    await client.query(`
        INSERT INTO books(title, author, genre,  in_stock, price)
        VALUES('IT', 'Stephen King', 'horror', true, 12.25);
        INSERT INTO books(title, author, genre,  in_stock, price)
        VALUES('The Hitchhikers Guide to the Galaxy', 'Douglas Adams', 'comedy', true, 25.00);
        INSERT INTO books(title, author, genre,  in_stock, price)
        VALUES('Game of Thrones', 'George R.R. Martin', 'fantasy', true, 19.95);`);
    await client.query(`
        INSERT INTO movies(title, genre, rating,  in_stock, price)
        VALUES('Brave', 'adventure', 80, true, 25.00);
        INSERT INTO movies(title, genre, rating,  in_stock, price)
        VALUES('Justice League: The Flashpoint Paradox', 'adventure', 90, true, 18.99);
        INSERT INTO movies(title, genre, rating,  in_stock, price)
        VALUES('Underworld', 'action', 95, true, 20.50);
        `);
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
    await createInitialAppointments();
  } catch (error) {
    throw error;
  }
}

// export functions
module.exports = {
  rebuildDB,
};
