# Block 34C - Guided Practice 

1. How do you install the Jest testing framework for Prisma unit testing in your Node.js project?

<details>
    <summary>Show Answer</summary>

```bash 
npm install --save-dev jest
```
</details>

2. How do you install the React Testing Library for Prisma unit testing in your Node.js project?

<details>
    <summary>Show Answer</summary>

```bash 
npm install --save-dev @testing-library/react
```
</details>

3. How can you install the Supertest library for Prisma unit testing in your Node.js project?

<details>
    <summary>Show Answer</summary>

```bash 
npm install --save-dev supertest
```
</details>

4.  You have an API developed using Express.js to create a test for one of the endpoints. The endpoint you are testing is the `/login` route, which takes a `POST` request with a `username` as "testuser"and `password` as "testpassword", and returns a JSON response with a status code as "200" and a `token` if the login is successful.

<details>
    <summary>Show Answer</summary>

```js
const supertest = require('supertest')
const server = require('../app')

describe('POST /login', ()=> {
    it('should 200 when logging in a user', async ()=> {
        const res = await supertest(server).post('/login').send({
            username: 'testuser',
            password: 'testpassword'
        })

        expect(res.status).toBe(200);
    })

    it('should return a token when logging in a user', async ()=> {
        const res = await supertest(server).post('/login').send({
            username: 'testuser',
            password: 'testpassword'
        })

        expect(res.body.token).toBeTruthy();
    })
})
```
</details>

5. Write and execute a test case using Jest and "supertest" libraries in a Node.js application to confirm the functionality of the GET `/students` endpoint. The test case should validate whether the endpoint is returning an HTTP status code is "toEqual(200)" and ensure the received response body is an array.

<details>
    <summary>Show Answer</summary>

```js
const supertest = require('supertest')
const server = require('../app')

describe('GET /students', ()=> {
    it('returns 200 OK when successful', async ()=> {
        const res = await supertest(server).get('/students');

        expect(res.status).toBe(200);
    })

    it('returns an array of students when successful', async ()=> {
        const res = await supertest(server).get('/students');

        expect(Array.isArray(res.body)).toBe(true);
    })
})
```
</details>

6. Utilize the Jest testing framework and the `supertest` library to construct a test case that confirms the functionality of a specific endpoint in a Node.js Express application, particularly the endpoint for retrieving a student's details by their ID (GET `/students/1`).

<details>
    <summary>Show Answer</summary>

```js
const supertest = require('supertest')
const server = require('../app')

describe('GET /students/:id', ()=> {
    it('returns 200 OK when successful', async ()=> {
        const res = await supertest(server).get('/students/1');

        expect(res.status).toBe(200);
    })

    it('returns a student object when successful', async ()=> {
        const res = await supertest(server).get('/students/1');

        expect(res.body.name).toBeTruthy();
    })
})
```
</details>
