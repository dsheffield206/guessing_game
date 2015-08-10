
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
 this.response = ' ';
 this.run = function() {
  this.guess = prompt(question);
  addToGuessList(this.guess);
  this.guess = parseInt(this.guess);
  console.log(this.guess);

  var gameResponse = document.getElementById('game-response');
  while(this.guess != this.answer) {
    if(this.guess < 44 && this.guess > 22) {
      this.response = ('That is not quite it, but you are ' + this.aboveOrBelow() + ' by ' + Math.abs(this.difference) + '. Keep playing.');
      this.guess = prompt('Guess again', 'Last guess was ' + this.guess);
    } else {
      this.response = ('Not even close. You are ' + this.aboveOrBelow() + ' by ' + Math.abs(this.difference) + '. Try again.' );
      this.guess = prompt('Your last guess was ' + this.guess);
    }
    gameResponse.innerHTML = this.response;
  }

  if(this.guess == this.answer) {
    this.resposne = this.message;
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

// No longer firing alerts but now passing this.response into DOM


function addToGuessList(xx) {
  var guessListItem = document.createElement('li');
  var guessNode = document.createTextNode(xx);
  guessListItem.appendChild(guessNode);
  document.getElementById('guess-list').appendChild(guessListItem);
}

var stadium = new Question (33, 'Can you guess how many stadiums that David has watched a college football game? HINT: It is between 1 and 100', 'Brilliant!! Congratulations! You are correct!');

var b33 = new Question (22, 'How many students are in this class?', '22 AMAZING PEOPLES!!!')

stadium.run();
b33.run();





