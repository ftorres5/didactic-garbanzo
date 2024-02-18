# Block 31 - Backend Fundamentals

The starting code for the in-class demo can be found [here](./demo/README.md)

The solution code for this block can be found within the [SolutionCode](../../SolutionCode/31-backend_fundamentals/README.md) folder

## Objectives
* Recognize and analyze the structure of a Node Express server.
* Interpret the structure and functionality of an Express REST API, created with Express Router and modules.


## Resources 
* [Express.js Install Guide](https://expressjs.com/en/starter/installing.html)
* [MDN Express / Node.js](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs)
* [Nodemon](https://github.com/remy/nodemon#nodemon:~:text=npm%20install%20%2D%2Dsave%2Ddev%20nodemon)
* [Google JSON formatter extension](https://chromewebstore.google.com/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=en-US&utm_source=ext_sidebar)

API Clients other than the Browser or front-end (FE) application aka React application. These can help test just the API endpoints and make sure they work so that when you use them in a FE application any bugs will come from the FE code rather than the API. 

* [Postman](https://www.postman.com/downloads/)
* [Insomnia Cookie](https://insomnia.rest/download)

To create a new Express / Node.js application: 

1. In an empty folder initialize the npm package and enter to move through the prompts. The command to initialize npm is:
```bash
npm init
```

If you want to skip changing the prompts you can use: 
```bash
npm init -y
```

2. Install the express pacakge
```bash
npm install express
```