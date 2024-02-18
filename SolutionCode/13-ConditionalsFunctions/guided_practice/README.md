# Block 13: Guided Practice 

For this guided practice, we will be linking our javascript file to an HTML document and building some basic user interactivity. We will make a yards-to-meters converter using **functions**, the window **prompt()** method, and our browser's *dev console*.

# Steps 

1. Anywhere you would like, create two files: `yards_meters.html` and `yards_meters.js`
2. In your `yards_meters.html` create html, head and body tags, and link your `yards_meters.js `file in the head of the document.
3. Now, move to your yards_meters.js file. Let us start by prompting our user for some yards we want to convert to meters. Create a variable using the let keyword (so we can reassign it) called `inputYards`. We will now use a browser window method, **prompt()**  Set your `inputYards` variable equal to our window **prompt()** method. Pass the prompt a string asking our user for a yard amount to convert. If you would like, console log your `inputYards` variable. Open your `index.html` file using live server, and you should be greeted with a prompt.
4. Above your window prompt, define a function called `convertToMeters`, which takes yards as an argument. We need this function to do some math for us. The conversion rate from yards to meters is 0.9144. So, let us have our function return the yards (passed in) multiplied by 0.9144.
5. Now, go back to after your last line of code and invoke this function, passing it our `inputYards` variable. Store the result of the function call in a variable called `convertedMeters`. (Remember to use let so it is reassignable.)
6. After your last function definition, define a new function called `createMessage`. It needs to take two arguments, `yards` and `meters`, and use if statements to determine what message to return based on the input values. 
    * Inside the function body, create a variable called `message` using let, as we will be reassigning its value in our if statement. Next create a variable called `numYards` (using `const`) and set it equal to the yards passed into the function multiplied by 1. We have multiplying by 1 to make sure it is a number. 
7.  We can now write our if statement logic! Use the === operator to check the following conditions:
    * If our numYards variable is strictly equal to 1760, reassign the message variable to `"That is as long as a mile`"
    * If our numYards variable is strictly equal to 100, reassign the message variable to `"That is as long as a football field"`
    * If our numYards variable is strictly equal to 26, reassign the message variable to `"That is as long as a tennis court!"`
8. Lastly, after your if statements, return a larger message using template literals, declaring how many meters we have converted to yards and the message from our message variable.
9. Move back down to your prompts and invoke this function, passing it your `convertedMeters` and `inputYards` variables. Store the result of the function call in a variable called `output`, and `console.log` it.
