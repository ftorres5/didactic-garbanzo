# Block 31 Backend Fundamentals

Using what we have learned about Node.js and Express.js:

1. Initialize a new project with `npm`

<details>
<summary>Show Answer</summary>

[Docs](https://expressjs.com/en/starter/installing.html#:~:text=%24-,npm%20init,-This%20command%20prompts)

```bash
npm init
```
</details>


2. Install Express.js in the directory

<details>
<summary>Show Answer</summary>

[Docs](https://expressjs.com/en/starter/installing.html#:~:text=%24-,npm%20install%20express,-To%20install%20Express)

```bash
npm install express
```
</details>

3.  Create an Express.js server

<details>
<summary>Show Answer</summary>

[Docs](https://expressjs.com/en/starter/hello-world.html#:~:text=const%20express%20%3D%20require(%27express%27)%0Aconst%20app%20%3D%20express())

```js
const express = require('express')
const server = express();
```
</details>

4. Set the server to listen at PORT 8080.

<details>
<summary>Show Answer</summary>

[Docs](https://expressjs.com/en/starter/hello-world.html#:~:text=app.listen(port%2C%20()%20%3D%3E%20%7B%0A%20%20console.log(%60Example%20app%20listening%20on%20port%20%24%7Bport%7D%60)%0A%7D))

```js
const port = 8080

server.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

```
</details>

5. Start the server from the terminal.

<details>
<summary>Show Answer</summary>

[Docs](https://expressjs.com/en/starter/hello-world.html#:~:text=Run%20the%20app%20with%20the%20following%20command%3A)

```bash
node server.js
```
</details>

6. Create an API route to "/hello" that returns a greeting

<details>
<summary>Show Answer</summary>

[Docs](https://expressjs.com/en/starter/basic-routing.html#:~:text=app.get(%27/%27%2C%20(req%2C%20res)%20%3D%3E%20%7B%0A%20%20res.send(%27Hello%20World!%27)%0A%7D))

```js
server.get('/hello', (req, res) => {
    res.send('Hello World!')
})
```
</details>

7. Create a dynamic API route to "/hello/:name" that returns a specific greeting

<details>
<summary>Show Answer</summary>

[Docs](https://github.com/expressjs/express/blob/2a00da2067b7017f769c9100205a2a5f267a884b/examples/params/index.js#L54C1-L56C4)

```js
server.get('/hello/:name', (req, res) => {
    res.send(`Hello ${name}`)
})
```
</details>

8. Create an API route with a queried string at "/hello-query" that returns a specific greeting

<details>
<summary>Show Answer</summary>

[Docs](https://visheshism.medium.com/simplifying-data-input-in-express-an-overview-of-req-params-req-query-and-req-body-179ab07b2256#:~:text=II.%20Extracting%20Data%20with%20req.query)

```js
server.get('/hello-query', (req, res) => {
    res.send(`Hello ${req.query.name}`)
})
```
</details>

9. STRETCH GOAL: Serve an 'index.html' or React Application to demonstrate interactivity in the browser.

<details>
<summary>Show Answer</summary>

[Docs](https://leejjon.medium.com/create-a-react-app-served-by-express-js-node-js-and-add-typescript-33705be3ceda#:~:text=app.use(express.static(path.join(__dirname%2C%20%27../react%2Dapp/build%27)))%3B)

React Application:
* Have a React app and have run the build command to get the build files to serve from our Express application. 
```bash
npm run build
```
* Serving the React app from our server
```js
const path = require('path');

server.use(express.static(path.join(__dirname, '../react-app/build')))
```

Serve index.html with our Express application. Note the index.html is within a folder called `public` that is at the same directory level as our server file: 

```js
const path = require('path');

server.use(express.static(path.join(__dirname, '/public/index.html')))
```
</details>