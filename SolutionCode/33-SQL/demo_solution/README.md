# Block 33: SQL

Guided in-class project for Block 33: SQL

We will be fixing an API for a store that sells books and movies. 
All the API routes are correct but there are no SQL queries for that data. 

We have been hired to fix the API by adding the correct SQL queries. 

## Database Schema 

![database schema](./db_schema.png)

Answer the Questions about the Database Schema for this API: 

1. Which key should be the primary key for each table?

<details>
    <summary>Show Answer</summary>
    id
</details>

2. Are these tables joined? 

<details>
    <summary>Show Answer</summary>
    No
</details>

### Write Basic SQL Queries

Let's set up the database on our local machine and practice some SQL queries.  

Before starting with step 1 make sure that you have `npm i` to get all the dependencies. 

1. We need to create a database on our computer in order to fix and test the endpoints. In your terminal log into `psql` by using the following command:

```bash
psql -U postgres 
```

Mac users might be able to log in with 

```bash
    psql
```

2. Create a new database by running the following command in the `psql` terminal
```sql
CREATE DATABASE store;
```

3. Check that the database exists by listing all databases on the system. 
```bash
\list
```

4. Navigate to the newly create database called `store`
```bash
\c store
```

5. Create the following SQL queries in the terminal. 

- find all books. Returns 3 records.
- find the title for the book with the id of 3. Should be Game of Thrones 
- list all movies sorted by price descending. The movie `Brave`should be at the top. 
- add a book record for _"The Host"_, by Stephenie Meyer, which has a genre of science fiction and sells for $16.84
- find all books in the science fiction genre. Should return 1 book (the one we created).
- update _The Host_ record so that it is in stock
- find all books in stock. Should return 4 books
- delete _The Host_ record
- find all books. Returns 3 records.

6. Exit psql by entering the following command
```bash
\q
```

## Endpoints 

Port 8080 by default

| Method | Endpoint           | Description                    |
| ------ | ------------------ | ------------------------------ |
| GET    | /                  | Sent server working message    |
| GET    | /api/status        | Returns 'OK'                   |
| GET    | /api/books         | Get all books                  |
| GET    | /api/books/:id     | Get a book by id               |
| POST   | /api/books         | Create a new book              |
| PUT    | /api/books/:id     | Update a book by id            |
| DELETE | /api/books/:id     | Delete a book by id            |
| GET    | /api/movies        | Get all movies                 |
| GET    | /api/movies/:id    | Get a movie by id              |
| POST   | /api/movies        | Create a new movie             |
| PUT    | /api/movies/:id    | Update a movie by id           |
| DELETE | /api/movies/:id    | Delete a movie by id           |

## Steps to Complete the Project 

7. Look inside `package.json` and run the script that starts the server with nodemon
<details>
    <summary>Show Script</summary>
    
```bash
npm run start:dev
```
</details>

Note that if you set up a password for your postgreSQL server you will need to change the connection string within [client.js](./db/client.js) line 4 to 

```js
const connectionString =
  process.env.DATABASE_URL || "https://username:password@localhost:port/dbName";
```

Where the username and password is the username and password you set up when installing postgreSQL, the port is the port number the postgreSQL server is running (usually 5432) and the database name that you want to connect to. So the above string would look like the following for a username `jess`, a password of `somePass`, with the server running on port 5432 and connecting to the `store database`

```js
const connectionString =
  process.env.DATABASE_URL || "https://jess:somePassword@localhost:5432/store";
```

8. Complete all the database functions within `/db/books.js` and `/db/movies.js`
    - Make sure to test each endpoint with Postman or Insomnia  


## Packages Used in this Project
* express
    - Used to create an API server
* nodemon
    - Used in development so the server can automatically restart when saving files
* dotenv 
    - Used to be able to use environment variables 
* pg
    - Used to be able to connect to a PostgreSQL database