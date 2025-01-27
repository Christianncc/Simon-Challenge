import {Greenbox,Whitebox,Redbox,Bluebox} from "./ClickAnimation.js";
import {music1,music2,music3,music4,music5} from "./AudioColor.js";
// an array to select which color to be picked base on random chosen number "buttonColours1[randomNumber1]"
var buttonColours1 = ["Green","White","Red","Blue"];
// a variable for text number level
var NumberIncrease = 0;
// a variable "nextSequence" to use in other PRESS or CLICK eventlistener
var nextSequence1 = () => {
// increasing the number to 1 for every succeeding level
    NumberIncrease++;
  $(".Text-css").text("Level "+ NumberIncrease);
    userClickedPattern = [];
// this is where the random number starts 0-3
    var randomNumber1 = Math.floor(Math.random()*4);
// after the "randomNumber1" picks a random number between 0-3. the selected random number will call inside the "buttonColours1[randomNumber1]" having a new variable "randomChosenColour1"
    var randomChosenColour1 = buttonColours1[randomNumber1];
// now variable "randomChosenColour1" is now equal to [Green or White or Red or Blue]. This Color Name should be push inside the array of "gamePattern1"
    gamePattern1.push(randomChosenColour1);
// by combining "." + randomChosenColour1. we can select the CLASS of the color box that need to be fadein and fadeout if chosen
    $("." + randomChosenColour1).fadeIn(100).fadeOut(100).fadeIn(100);
// after the fadein fadeout animation. The sound will play corresponds on the color box
    var audio = new Audio("sounds/" + randomChosenColour1 + ".mp3");
    audio.play();
};

// calling the class "Button" (4 boxes) with eventlistener click.
  $(".Button").click(function() {
// here we create a variable that is equal to $(this) - REFERS TO THE 4 ALL ".BUTTON" CLASS and getting their attribute("id")
var userChosenColour = $(this).attr("id");
// the chosen color box will get the "id" and push it inside the array of "userClickedPattern"

    userClickedPattern.push(userChosenColour);

// checking if the last clicked color is right.
  checkAnswer(userClickedPattern.length-1);
  });



// variable "started" = false because we user can only click a key one at a time
var started = false;
// referring to "body" so if this function detects a key the nextSequence will start
$("body").keypress(function(){
// if(!started) is also equal to if(started == false). we need to set this to true to operate the inside of IF{}
    if (!started)
    { 
// the text will change to Level 0++
      $(".Text-css").text("Level "+ NumberIncrease);
// calling the function nextSequence(); which picking random box that has animation and sound
      nextSequence1();
// we declare the "started" here to TRUE so that if "if (started(TRUE NOW) == false) or !started(TRUE NOW)" will result to a false statement hence it will stop the sequence. to prevent the user to spam the key to continue.
      started = true;
    }
  });
  var gamePattern1 = [];    
  var userClickedPattern = [];

function checkAnswer(currentLevel) {
// we need to fulfill the statement below to proceed to its operation
// after clicking any key the game will start to level 1 and chooses a random color that pushes to "gamePattern1". the condition here is if the "gamePattern1" is equal to "userClickedPattern" the operation will start. 
// this will proceed if the array of gamePattern1 is match to the userclickedpattern array. 
    if (gamePattern1[currentLevel] === userClickedPattern[currentLevel]) {
      console.log("success");
// and if the "userClickedPattern.length" is equal to "gamePattern1.length" the operation will start after 1 second
      if (userClickedPattern.length === gamePattern1.length){
        setTimeout(function () {
          nextSequence1();
        }, 500);
      }
// if the user clicked the wrong answer the operation will proceed here with changing the background to red, wrong music, changing text, and calling the "startOver" function.
    } else {
      $("body").addClass("background-red");
      $(".Text-css").text("Game Over, Press Any Key to Restart");
      music4();
      setTimeout(function () {
          $("body").removeClass("background-red");
        }, 200);
      startOver ();
    }
}

// the purpose of this function is to reset the "NumberIncrease" which is the Level number, Gamepattern array back to empty and variable "started" to false. so we can access the if statement of the keypress one time again
var startOver = () => {
NumberIncrease = 0;
gamePattern1 = [];
started = false;
}

// Calling the ClickAnimation function

Greenbox();
Whitebox();
Redbox();
Bluebox();
