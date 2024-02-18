# Block 27B - Expanded React I Guided Practice 

Redux and React Redux

1. Write the code for importing Provider from react-redux.

<details>
<summary>Show Answer</summary>

[Docs](https://redux.js.org/tutorials/essentials/part-2-app-structure#creating-the-redux-store:~:text=import%20%7B%20Provider%20%7D%20from%20%27react%2Dredux)

```js
import { Provider } from 'react-redux'
```
</details>


2. Write a code to import `configureStore` from the Redux Toolkit store. Then, export the `configureStore` with a reducer inside it as `reducer: { counter: counterReducer, }`

<details>
<summary>Show Answer</summary>

[Docs](https://redux.js.org/tutorials/essentials/part-2-app-structure#creating-the-redux-store)

```js
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: {
    counter: counterReducer
  }
})
```
</details>

3.  Create a reducer named increment that increases state by 1.

<details>
<summary>Show Answer</summary>

[Docs](https://redux.js.org/tutorials/essentials/part-2-app-structure#creating-slice-reducers-and-actions)

```js
createSlice({
    initialState: {
        value: 0
    },
    reducers: {
        increment: state => {
            state.value += 1
        }
    }
})
```
</details>

4. Write the command to export the action created in step 3 as counterSlice.actions.

<details>
<summary>Show Answer</summary>

[Docs](https://redux.js.org/tutorials/essentials/part-2-app-structure#creating-slice-reducers-and-actions)

```js
export const {increment} = counterSlice.actions

```
</details>

5. Write a command to set the initial state of the Redux reducer. Inside the state, set balance = 0.

<details>
<summary>Show Answer</summary>

[Docs](https://redux.js.org/tutorials/essentials/part-2-app-structure#creating-slice-reducers-and-actions)

```js
createSlice({
    initialState: {
        balance: 0
    }
})

```
</details>