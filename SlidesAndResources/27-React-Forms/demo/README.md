# Block 27: React Forms

Guided in-class project for Block 27: React Forms

In this project we will learn about React Forms using a previous project (ToDos)

# Introduction
We are going to build upon our simple To Do Task List we made in Block 25. 

We are going to be using a mock Todo List API. The base url for the todos is at `https://todo-api-ur6k.onrender.com/api/todos`

The object of a todo for this API is: 

```json
{
    "id": 1, 
    "task": "A good to do",
    "completed": false
}
```

When adding a to do using the API only the `task` key is required in our request. 

## Steps to complete the project 
1. Create a components folder inside `/src` folder
2. Move the TaskList component from `App.jsx` to a `TaskList.jsx` file within the components folder 
3. Import the TaskList component into `App.jsx`
4. Set the tasks default state to an empty array in `App.jsx`
5. Create a `useEffect` within `App.jsx` to fetch a list of todos from `https://todo-api-ur6k.onrender.com/api/todos`
6. Create a new component within our `components` folder called `AddTodo.jsx` and import it into our `App.jsx` file
7. Add a title to the component, a form which includes a text input for our task and a submit button
    - If you wrap the label around the input you don't need the `for` attribute on the label or the `name` attribute on the input
    - The submit button can be just a button with the `Submit` text instead of an `input`
8. Create a default state for our ToDo within our form 
9. Create a default state for errors we may get when adding our Todo. Set the default state to `null`
10. Set the value of the Todo input to the `todo` we have within state
11. Add an `onChange` event on the input using an anonymous function and calling our `setTodo` within that function
12. Create a `handleSubmit` function within our component but before the `return`
    - The function will take a parameter called `event`
    - Call `event.preventDefault()` as the first thing the function does 
    - Add a try/catch where we try to submit the todo to our API and catch any errors. 
    - If we catch errors make sure the set our error in state to the `error.message` we catch
    - clear the form once the POST request is made 
13. Connect our `handleSubmit` function to our form using the `onSubmit` event on the form tag
14. Conditionally render the error message to the user after the title but before the form 
15. Pass the `tasks` and `setTasks` from `App.jsx` to the `AddTodo` component as props. 
16. In our `handleSubmit` function set the tasks we get from `App.jsx` to the current tasks plus the new task created 