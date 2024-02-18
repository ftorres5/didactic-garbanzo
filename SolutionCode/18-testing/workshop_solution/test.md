# Unit Tests:
1. A function called `multiplication` that returns the product of the two input numbers.

Some personal developer thoughts about this function not included in the prompt: 
* return -1 for any errors

* Expect `multiplication(2, 3)` to equal 6
* Expect `multiplication(2, 0)` to equal 0
* Expect `multiplication()` to equal -1
* Expect `multiplication(1)` to equal -1
* Expect `multiplication("2", "3")` to equal -1
* Expect `multiplication("2", 3)` to equal -1
* Expect `multiplication(2, "3")` to equal -1
* Expect `multiplication([2, 3])` to equal -1


2. A function called `concatOdds` takes two arrays of integers as arguments. It should return a single array that only contains the odd numbers, in ascending order, from both of the arrays.

* `concatOdds([1,2,3], [4,5,6])` to equal `[1, 3, 5]`
* `concatOdds([1,2,3, 15], [7])` to equal `[1, 3, 7, 15]`
* `concatOdds([1,2,3], []])` to equal `[1, 3]`
* `concatOdds([], [5, 2, 1]])` to equal `[1, 5]`
* `concatOdds([], []])` to equal `[]`
* `concatOdds([]])` to equal `[]`
* `concatOdds([1,2,3], [4,5,6], [7, 8, 9])` to equal `[1, 3, 5]`


# Functional Tests:
1. A shopping cart checkout feature that allows a user to check out as a guest (without an account), or as a logged-in user. They should be allowed to do either, but should be asked if they want to create an account or log in if they check out as a guest.

GIVEN I am a user on the site
WHEN I checkout from the shopping cart
THEN I see a message asking if I'd like to create an account, login or continue as a guest

GIVEN I am a user without an account who is checking out
WHEN I select to continue as a guest
THEN I am able to complete the checkout process

GIVEN I am a user without an account who is checking out
WHEN I select to register
THEN I am able to create an account 
AND the items within my shopping cart is still there

GIVEN I am a user with an account who is checking out
WHEN I select to login
THEN I am able to login to the site
AND the items within my shopping cart is still there