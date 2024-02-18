# Block 32: API Routes

Guided in-class project for Block 32: API Routes

## Introduction

1. We are going to create an API that serves products when a client makes a request. The API should have the following endpoints when complete:

| Method | Endpoint           | Description                    |
| ------ | ------------------ | ------------------------------ |
| GET    | /api/products      | Get all products               |
| GET    | /api/products/:id  | Get a product by id            |

2. We will go through the setup of creating a database and seeding data to that database in class, but this is provided for you in the starter code.

## Steps to complete the project
1. Run ```npm install``` inside the demo folder.
2. Open a psql session (```psql postgres``` in your terminal) and run ```create database ecommerce```.
3. Run ```npm run seed``` to seed the database.
4. Run ```npm start``` to start up the server
5. Test your health route by using the browser or insomnia/postman to hit GET /health
6. Let's add and initialize some middleware.
* First run ```npm install morgan``` and ```npm install cors```
* Then add the following to your ```index.js```
```
server.use(cors());
server.use(morgan('dev')); // this is logging middleware that will nicely show what routes you're hitting in your terminal
server.use(express.json()); // this is body parsing middleware to parse an incoming request in json format
server.use(express.urlencoded({extended: true})); // this is body parsing middleware to parse an incoming request in url-encoded format
```
* Also require the modules at the top of the file with the other imports.
7. Create an api folder with an ```index.js``` file and a ```products.js``` file.
8. In the products.js file, create a router, and create 2 routes (get all products, and get a single product by id). Import the db functions you'll need from the db folder. Export your router.
9. In the api/index.js file, import your products router, and create a base router that mounts your products routes on "/products". Export your base router.
10. In your outer index file, mount your base router on "/api".
11. Test your routes with insomnia/postman.
12. View your database with pgadmin/postico.
