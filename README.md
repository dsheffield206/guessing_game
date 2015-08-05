This is a simple guessing game for users to guess how many college football games have I watched a game.
This is Day 1 assignment for Code Fellows B33 Bootcamp.
The answer to this question is finite.
I have been to 33 college football stadiums.
At first I created a simple question with 3 responses.
With encouragement by the staff, we added a While Loop to allow for the game to continue until the user returned the correct answer.
Initially, the different iterations of the while loop only returned a "message" but did not provide an "out" for the while loop, which inadvertantly created an infinite loop.
Alex had to re-start his computer!
The While Loop is initiated when the user returns the wrong answer.
We corrected this by prompting the user to submit an additional input with 2 different responses.
Once the user selects the correct number, the program ends.
Because the answer was a number, I was introduced to the concept of parseInt( ), which was currently unknown.

We made some changes to make it easier to guess the answer
We added a hint on line 12
We cleaned up indentations and changed from double to single quotes.
We created a function to define above or below for guesses within 10.
We called the new function in the while loop.
