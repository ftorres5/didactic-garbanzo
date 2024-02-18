# Block 31: Backend Fundamentals

Guided in-class project for Block 31: Backend Fundamentals

## Introduction 

1. We are going to create an API that serves recipes when a client makes a request. The API should have the following endpoints when complete: 

| Method | Endpoint           | Description                    |
| ------ | ------------------ | ------------------------------ |
| GET    | /                  | Serve a static index.html file |
| GET    | /api/recipes       | Get all recipes                |
| GET    | /api/recipes/:name | Get a recipe by name           |
| GET    | /api/recipes/meal?type=  | Get a recipe by meal type      |

* Note the endpoint `/api/recipes/meal` should have a query string of `type` equal to the meal. 
    - Example of a full url: `/api/recipes/meal?type=Lunch`

2. Instead of using a database we will be using hardcoded data that can be found in `data.js`. 

## Steps to complete the project 
1. Initialize the `demo` directory with npm by running the following: 
```bash
npm init 
```
* This command prompts you for a number of things, such as the name and version of your application. You can just hit RETURN to accept the defaults 
* If you don't want to go through the command prompts a shorthand for accepting all the defaults is 
```bash
npm init -y
```
2. Install express using the command:
```bash
npm intall express 
```
3. Create a `server.js` file in the `demo` directory
4. Import the recipes from the `data.js` file, import express and path into the file
5. Initialize the Express server 
6. Create a basic GET `/` endpoint to return the string "API working!"
7. Have the server listen on port 8080 and have a initial string printed to the console saying "Server listening on port 8080"
8. Create a start script in the package.json. You should have the following scripts: 
```json
    {
        "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1",
            "start": "node server.js",
        }
    }
```
* Note that having node running the server won't automatically update if we make changes. For every change we make after starting the server we will have to shut down the server and re-start. 
* To avoid this hassle and have our server restart automatically (similar to how React refreshes when we make changes) we can install nodemon via the command: 
```bash
npm install nodemon 
```
* We need to update our start script to use nodemon instead of node to start our server
```json
    {
        "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1",
            "start": "nodemon server.js",
        }
    }
```
9. Create an endpoint that has a url of `/api/recipes` and returns all the recipes
10. Create an endpoint that has a url of `/api/recipes/:name` where the name will be a variable passed in the url as a parameter. The endpoint should return all recipes that have that name regardless of capitalization. 
11. Create an endpoint that has an url of `/api/recipes/meal` that returns all recipes that have a mealType equal to the query string of type
    - Note if this endpoint is underneath the `/api/recipes/:name` endpoint it won't work since all requests will go to that endpoint first. Make sure that this endpoint goes before the `/api/recipes/:name` endpoint
12. Update our GET `/` endpoint to serve the index.html file located within the public directory
13. Add the following to the file in order to allow our index.html to have css styles

Note that any console.logs within your API will log to the terminal running the server **NOT** the browser console.