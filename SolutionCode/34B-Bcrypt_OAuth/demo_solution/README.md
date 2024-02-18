# Block 34B: Bcrypt and OAuth

Guided in-class project for Block 34B: Block 34B: Bcrypt and OAuth.

We are serving up a login page that simply logs a username and password in the console when the client logs in. Instead, we want to do the following
* Hash the password with bcrypt and log the hashed password
* Set up a Github OAuth authentication flow

## Steps to Complete the Project

1. Install npm package `bcrypt`

```bash
npm i bcrypt
```

2. Install your dependencies, run npm run start, and check that your server is healthy by hitting the health endpoint in the browser and seeing the message "Server is Healthy" on the page.

3. Create an OAuth application in Github using these [instructions](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app)

3. We are going to create 2 different flows with 6 endpoints. For Flow 1, reference this [documentation](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps) For Flow 2, reference this [documentation](https://www.npmjs.com/package/bcrypt).

Flow 1:
* GET / -> this endpoint will serve up html that has a link to redirects the user to our github login url
* GET /login/github -> this endpoint will redirect the user to github's OAuth flow, sending the user to github's authorization url using the credentials we received when we created our OAuth app in github (hitting github's https://github.com/login/oauth/authorize endpoint).
* GET /login/github/callback -> this is our callback url - this endpoint will take the authorization code obtained from the oauth flow and exchange it with github to retrieve an access token... it will then use that access token to redirect to an authenticated page (hitting github's https://github.com/login/oauth/access_token endpoint)
* GET /user -> this is the authenticated page that shows an access token once the github OAuth flow was successful

Flow 2:
* GET /bcrypt-register?password=<password> -> we will hit this endpoint in insomnia with a new password and return a hashed password with bcrypt
* GET /bcrypt-login?password=<password>&hashedPassword=<hashedPassword> -> we will hit this endpoint in insomnia with the same password sent above and the hashed password and compare them, sending back whether the password is correct
