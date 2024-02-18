# Block 18: Testing Workshop

## Overview
One of the first steps for many TDD projects is determining which tests need to be written for a project, feature, or piece of code. These range from unit tests (at a very low level, what result we should expect from calling a specific function or piece of code), to functional tests (what does our website or app need to do when a user performs some action).

In this workshop, you are going to write instructions for tests, often known as test specifications, or test specs, for a series of prompts. 

### Unit test specifications should take the form of:

* Expect *action* to be *some result*
* Example: For the prompt "A function called "addition" that returns the sum of two input integers", your tests might include:
    - Expect `addition(2, 3)` to be a number
    - Expect `addition(2, 3)` to be equal to 5
    - Expect `addition("a", 3)` to be an error

### Functional test specifications can be worded slightly more naturally:

* When a user *does something with some parameters*, *some thing should happen*
* Example: For the prompt was "A login and signup page that allows Single Sign-On with Google", your tests might include:
    - When a user clicks "Log In" without filling in any information, they should be shown an error and prompted to sign up if they have not yet.
    - When a user clicks "Log In" but has filled out an incorrect login or password, they should be shown an error and prompted to sign up if they have not yet.
    - When a user clicks "Log In" and has filled in their login and password correctly, they should be taken to their dashboard.
    - When a user clicks "Create Account" without filling in any information, they should be shown an error.
    - When a user clicks "Create Account" with an invalid email address or password, they should be shown an error.
    - When a user clicks the "Sign Up with Google" button, they should be taken through the Google authentication process.
    - When a user clicks "Log In with Google", they should be logged in through Google, or taken through the Google authentication process if they do not already have an account.

## Prompts: 
For each prompt below: 

* Read the prompt.
* Identify the expectations.
* Write specifications in pseudocode/plain English for all the tests that would be useful for that prompt.
    - Try to take any "edge cases," or unexpected circumstances, into account, and write test specs for them.
    - Try not to write extraneous tests!

## Unit Tests:
1. A function called `multiplication` that returns the product of the two input numbers.

2. A function called `concatOdds` takes two arrays of integers as arguments. It should return a single array that only contains the odd numbers, in ascending order, from both of the arrays.
    * Example: `concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1])`
        - ...should result in `[-1, 1, 3, 9, 15]`
    * Think about the following; you may need to make assumptions or decisions about the prompt and how the code should behave:
        - What should happen with unexpected inputs?
            - What kinds of unexpected inputs should we worry about?
        - What should happen when there are multiples of the same odd number in the arrays? (Hint: We gave you the answer to this one in the example above.)
    
## Functional Tests:
1. A shopping cart checkout feature that allows a user to check out as a guest (without an account), or as a logged-in user. They should be allowed to do either, but should be asked if they want to create an account or log in if they check out as a guest.
    * Think about the following; you may need to make assumptions or decisions about the prompt and how the feature should behave:
        - What should happen if the cart is empty?
        - What needs to be shown to the user at each step of check out?
        - What behaviors of this feature does the prompt miss or gloss over?

Hint: Observe the shopping cart and checkout features of some popular websites to get some ideas!