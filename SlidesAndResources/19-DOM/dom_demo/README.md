# Block 19: DOM (Document Object Model) Demo

## Objective
Take an array of dog names. Add them to the DOM in an unordered list.

```
const dogNames = [
  "Buster",
  "Rocket",
  "Lassie",
  "Brewser"
]
```

Next, take an array of cat names. Add them to the DOM in an unordered list, but use a different DOM method than what you used for the dogs.

```
const catNames = [
  "Fluffy",
  "Fat Louie",
  "Tom",
  "The Pink Panther"
]
```

Another requirement is to retrieve the DOM parent elements in 2 different ways (with 2 different types of query selectors).

Finally, add create a class 'new-class' with the style 'color: blue', and add it to the unordered list (with JavaScript) to turn the text of the unordered list blue.

## Steps:
* Create an unordered list in the body of your html with an id called dogs
* Create an ordered list in the body of your html with an id called cats
* Set a variable dogsParent equal to the element with the id 'dogs'
* Set a variable catsParent equal to the element with the id 'cat'
* Loop through dogs, creating an array of list html elements
* Replace the children of dogsParent with the array (use replaceChildren)
* Loop through the cats, appending a list element with the cat name to the cat parent on each iteration. (use appendChild)
* Create new-class and add it to unordered list
