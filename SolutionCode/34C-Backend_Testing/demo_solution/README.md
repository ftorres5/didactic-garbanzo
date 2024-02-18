# Block 34C: Backend Testing 

Guided in-class project for 34C: Backend Testing.

We have an API that uses `Prisma` queries to get data from our database.
We need to add tests so we can catch any breaking changes for any future code changes.

## Endpoints 

Port 8080 by default

| Method | Endpoint           | Description                    | Requires Authorization Token? |
| ------ | ------------------ | ------------------------------ | ----------------------------- |
| GET    | /api/books         | Get all books                  | No                            |
| GET    | /api/books/:id     | Get a book by id               | Yes                           |
| PUT    | /api/books/:id     | Allows a registered user to checkout or return a book by id    | Yes | 
| POST   | /auth/register     | Registers a new user           | No                            |
| POST   | /auth/login        | Logs in a new user             | No                            |
| GET    | /api/users/me      | Get a user's info              | Yes                           |


## Steps to Complete the Project 

1. Install supertest as a dev dependency
```bash
npm install supertest --save-dev
```

2. Install jest as a dev dependency

```bash
npm install jest --save-dev
```

3. Create a `jest.config.js` file and put the following in that file so that we have access to our environment variables

```js
const { config } = require('dotenv');
config();
```

4. Create a `tests` folder in `/api` 

5. Create the following test files:
  *  `auth.test.js`
  *  `books.test.js`

6. Create a test script in the `package.json` (there should be other scripts within the scripts array besides just the test)
```json
{ "scripts": {

    "test": "jest --runInBand --watch"
  },
}
```

7. In the `/api/tests/auth.test.js` file import `supertest` and the server (`server.js`)

8. Mock the `prisma client` and `bcrypt` for our tests

9. Create a describe block and tests to test each endpoint. 
    - use `beforeEach` for anything that should be run before each test
    - use `afterEach` to clear the Jest mocks

10. Create tests for each endpoint in the `/api/tests/books.test.js` file similar to how you made tests in the `auth.test.js` file

## Resources 
* [Supertest](https://github.com/ladjs/supertest?tab=readme-ov-file#getting-started)
* [Jest](https://jestjs.io/docs/expect)
* [Mock Prisma](https://www.prisma.io/docs/orm/prisma-client/testing/unit-testing#mocking-prisma-client)