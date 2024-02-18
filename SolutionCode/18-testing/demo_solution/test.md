# Overview

For each sub section below read the prompt, identify the expectations and write the specification that can be used to write tests for that prompt. 

# Unit Test
A function called `add` that takes an array of numbers and returns the sum. 

## Expectations: 
* the function will return a number which is a sum of numbers
* the function takes one argument 
* the argument is an array of numbers 
* we would expect `add([1, 2, 3])` to return 6 

## Test Specs 
Unit test specifications should take the form of: Expect [action] to be [some result]
1. Expect `add([1, 2, 3])` to return 6
2. Expect `add([1])` to return 1
3. Expect `add([1000, 50])` to return 1050
4. Expect `add()` to return 0
5. Expect `add([])` to return 0

# Functional Test
When a user creates a new account they must provide an email and password. The email must be valid and the password must have at least 8 characters and contain at least 1 special character (!,@,# etc) and 1 number. If they don't provide a valid email or password then they are shown an error message. 

## Expectations: 
* The user sees a form prompting them for an email and password
* The form includes a submit button
* When a user enters in only a valid email they receive a warning message asking for a password
* When a user enters in only a valid password they receive a warning message asking for an email 
* If a user enters a string in the email input without including `@` then they receive a warning message asking for a valid email 
* If a user enters a string in the password box with 3 characters then they receive a warning message asking for a valid password
* If a user enters a string in the password box with 8 characters and no special characters or numbers then they receive a warning message asking for a valid password
* If a user enters a string in the password box with 8 characters and 1 special character but no numbers then they receive a warning message asking for a valid password
* If a user enters a valid email and password then they are successfully registered and are navigated to a different page

## Test Specs 
Funtional test specifications should take the form of: (GIVEN) some context. (WHEN) some action is carried out. (THEN) a particular set of observable consequences should obtain

GIVEN I am a new user visiting the site 

WHEN I navigate to the register page
THEN I see a form to enter my email and password 

WHEN I enter only a valid email
AND click the submit button
THEN I see a message telling me to enter in a password

WHEN I enter only a valid password
AND click the submit button
THEN I see a message telling me to enter in an email

WHEN I enter an email that doesn't include an `@` symbol with a valid password
AND I click the submit button
THEN I see a message telling me to enter in a valid email

WHEN I enter a password that is only 3 letters long with a valid email
AND click I the submit button
THEN I see a message telling me to enter in a valid password

WHEN I enter a password that is 8 letters long but doesn't include special characters or numbers  
AND a valid email
AND click I the submit button
THEN I see a message telling me to enter in a valid password

WHEN I enter a password that is 8 letters long, contains 1 special character but doesn't include numbers  
AND a valid email
AND click I the submit button
THEN I see a message telling me to enter in a valid password

WHEN I enter a valid password 
AND a valid email
AND click I the submit button
THEN I see a message telling me I was registered successfully 
AND I'm navigated to the home page
