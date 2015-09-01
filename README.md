### Code Fellows Week 1 Assignment - Simple Guessing Game

#### Guessing Game - Summary
+ This is a simple guessing game for users to guess how many college football stadiums where have I watched a game. The answer to this question is finite, as I have been to 33 college football stadiums.
+ This is Week 1 assignment for Code Fellows B33 Bootcamp.
+ At first I created a simple question with 3 responses.
+ With encouragement by the staff, we added a While Loop to allow for the game to continue until the user returned the correct answer. Initially, the different iterations of the while loop only returned a "message" but did not provide an "out" for the while loop, which inadvertantly created an infinite loop. TA Alex had to re-start his computer!
+ The While Loop is initiated when the user returns the wrong answer. We corrected this by prompting the user to submit an additional input with 2 different responses.
+ Once the user selects the correct number, the program ends.
+ Because the answer was a number, I was introduced to the concept of parseInt( ), which was currently unknown.
+ In lab, we made modifications to the game to make it easier to guess the answer. For, example, we added a hint on line 12.
+ We also cleaned up indentations and changed from double to single quotes.
+ In addition, we created a function to define above or below for guesses within 10. We called the new function in the while loop.
+ Finally, we put the whole game within an object constructor; so, that you can take the guts of the guessing game when you call a new instance (passing new parameters), you are in effect, calling a brand new guessing game.
