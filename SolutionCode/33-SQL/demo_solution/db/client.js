const { Client } = require("pg");

//connection string format for postgreSQL server
//https://username:password@localhost:port/dbName

//Example for a username of jess with a password of somePassword running on port 5432 connecting to database store
//https://jess:somePassword@localhost:5432/store
const connectionString =
  process.env.DATABASE_URL || "https://localhost:5432/store";

const client = new Client({
  connectionString,
  ssl:
    process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: false }
      : undefined,
});

module.exports = client;
