# Block 34A: Database Abstractions With Prisma

Guided in-class project for Block 34A: Database Abstractions With Prisma. 

We have an API that uses `SQL` queries to get data from our database.
We need to refactor the API to use `Prisma` instead. 

## Endpoints 

Port 8080 by default

| Method | Endpoint           | Description                    | Requires Authorization Token? |
| ------ | ------------------ | ------------------------------ | ----------------------------- |
| GET    | /                  | Sends server working message   | No                            |
| GET    | /api/books         | Get all books                  | No                            |
| GET    | /api/books/:id     | Get a book by id               | Yes                           |
| PUT    | /api/books/:id     | Allows a registered user to checkout or return a book by id    | Yes | 
| POST   | /auth/register     | Registers a new user           | No                            |
| POST   | /auth/login        | Logs in a new user             | No                            |
| GET    | /api/users/me      | Get a user's info              | Yes                           |


## Steps to Complete the Project 

1. Install npm package `prisma`

```bash
npm i prisma
```

2. Initialize prisma by entering the following command in the terminal. This should create a new folder called `prisma` that contains a file called `schema.prisma`

```bash
npx prisma init
```

3. Connect your database with `prisma`. In the file `prisma/schema.prisma` create a db that has a provider called `postgresql` and a url equal to the environment connection string called `DATABASE_URL`.

```js
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

Make sure you're .env file looks like: 

```bash
DATABASE_URL="postgres://USER:PASSWORD@localhost:5432/library"
```

4. Create the database tables found in `/db/seedData.js` to Prisma models in `prisma/schema.prisma` 

5. Migrate the tables with Primsa using the following command: 

```bash
npx prisma migrate dev --name init
```

This should create a `migrations` folder in your `prisma` folder. 

If you are getting permission errors make sure the user in the connection string has super user access per the [docs](https://www.prisma.io/docs/orm/prisma-migrate/understanding-prisma-migrate/shadow-database#cloud-hosted-shadow-databases-must-be-created-manually:~:text=REFERENCES%20ON%20*.*%20privileges-,PostgreSQL,-The%20user%20must)

6. Install the npm package `prisma/client` via the command: 

```bash
npm install @prisma/client
```

7. Create a new seed file in the `prisma` folder called `seed.js`. Create `Primsa` seeds based on the seeds found in `/db/seedData.js`

8. Update the `seed` script in the `package.json` file to `node prisma/seed.js`. Run the new seed script. 

9. In `/db/client.js` change the connection to the database from `pg` to `Prisma`

10. Remove the client connection from `index.js`

11. Update the model functions in `/db/books.js` to use `Prisma` instead of `SQL`

12. Update the endpoints in `/api/auth.js` to use `Prisma` instead of `SQL`

## Resources 
* [Prisma Getting Started](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-node-postgresql)
* [Primsa - One to Many Relations](https://www.prisma.io/docs/orm/prisma-schema/data-model/relations/one-to-many-relations)
* [Prisma Example](https://github.com/prisma/prisma-examples/tree/latest/typescript/rest-express)