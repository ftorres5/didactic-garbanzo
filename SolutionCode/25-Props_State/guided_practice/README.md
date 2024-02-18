# Block 25: Guided Practice


## Documentation

Answer the following questions using the provided documentation links:

1. According to the React [documentation about state](https://react.dev/learn/state-a-components-memory), what is the difference between a local variable and a state variable?

<details>
   <summary>Answer</summary>
   The difference between a local variable and a state variable is that a state variable is stored within state while a local variable is only present until a particular function or scope is done executing. 
</details>

2. After reading the React [documentation about props](https://react.dev/learn/passing-props-to-a-component), what is a key difference between a prop and a state variable?

<details>
   <summary>Answer</summary>
   The key difference between a prop and a state variable is stored within state while a prop variable is passed to the component and when the component renders it receives a new version of props. When you want interactivity you'll use a state variable. 
</details>

## Setup
1. In your terminal, create a new React application with Vite by typing `npm create vite@latest`
2. Follow the prompts to install the package. Choose React with Javascript
3. Make your `cd` into the directory. `npm install`, and `code .` to open it in VSCode.
    - Note: with vite, `npm run dev` will start up our development server
4. Navigate to your `App.jsx` and delete all the starter code between the parents `div` and remove the `useState` invocation.
5. Delete any unused import statements.

### Counter Example

6. Import the useState hook, and create a state variable for count, and setCount inside the App component
7. Make a Button component to pass count down to. Beneath your App component, add a new Button component which returns a JSX button element.
8. Render this component inside your empty div in the App component.
9. You should see a button appear in the browser view. Pass `count` and `setCount` into this component.
10. Move back to the Button component, and pass an argument called 1 into the function parameters.  `Console.log` it before our return statement.
11. Replace the "Click me!" in the button element to render the count variable.
12. Add an `"onClick"` property to the button which calls `setCount`, and increments the `count` by 1.