
'use strict';

// This is a simple guessing game for users to guess
// how many college football stadiums have I watched a game.
// This is Day 1 assignment for Code Fellows B33 Bootcamp
// I have been to 33 college football stadiums
var Question = function (answer, question, message) {
 this.guess = 0;
 this.answer = answer;
 this.difference = 0;
 this.question = question;
 this.message = message;
 this.run = function() {
  this.guess = prompt(question);
  this.guess = parseInt(this.guess);
  console.log(this.guess);

  while(this.guess != this.answer) {
    if(this.guess < 44 && this.guess > 22) {
      alert('That is not quite it, but you are ' + this.aboveOrBelow() + ' by ' + Math.abs(this.difference) + '. Keep playing.');
      this.guess = prompt('Guess again', 'Last guess was ' + this.guess);
    } else {
      alert('Not even close. You are ' + this.aboveOrBelow() + ' by ' + Math.abs(this.difference) + '. Try again.' );
      this.guess = prompt('Your last guess was ' + this.guess);
    }
  }

  if(this.guess == this.answer) {
    alert(this.message);
  }
 };

 this.aboveOrBelow = function () {
    this.difference = this.guess - this.answer;
    if (this.difference > 0) {
      return('above');
    } else {
      return('below');
    }
  }
}


var stadium = new Question (33, 'Can you guess how many stadiums that David has watched a college football game? HINT: It is between 1 and 100', 'Brilliant!! Congratulations! You are correct!');

var b33 = new Question (23, 'How many students are in this class?', '23 AMAZING PEOPLES!!! JUST DO IT! BE LIKE MIKE aka MJ_23!')

stadium.run();
b33.run();




