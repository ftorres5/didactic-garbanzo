# Prompt

You were hired by a global hotel chain to redesign the functionality of the button panel on their elevators. The goal is to replace the outdated panel in over 1,200 different locations. Before you begin coding, you should make a list of all the ways these panels should be tested to make sure they are working correctly and respond to unexpected input in a way that makes sense. Remember to consider happy and unhappy paths! 

## Unit Tests
* Pushing the "open door" when the elevator is on a floor should hold the door for as long as it's pushed
* Pushing the "open door" when the elevator is moving should do nothing
* Pushing the "close door" when the elevator is on a floor should close the door if it's open
* Pushing the "close door" when the elevator is on a floor should do nothing if the door is closed
* Pushing a number button should light up that button and begin closing the doors 


## Integration Tests
* When an elevator is higher than a particular floor it no longer responds to the 'up' button when it's pressed on that floor
* When an elevator is going down it doesn't respond to any 'up' buttons pressed 
* When an elevator is going up it doesn't respond to any 'down' buttons pressed 

## Functional Tests
> WHEN I press the 'down' button on floor 7
>
> AND press the lobby button inside the elevator 
> 
> THEN the elevator goes to the lobby as long as no floor buttons on the way down aren't pressed to go down

> WHEN I press the 'up' button form the lobby
>
> AND press the floor 7 button inside the elevator
> 
> THEN the elevator goes to the 7th floor as long as no floor buttons on the way up are pressed to go up


## Acceptance Tests
* Install the new panel in 5 locations for six months and collecting feedback before installing in all 1,200 locations. 