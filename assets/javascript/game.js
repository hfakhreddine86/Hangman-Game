//Global Variables

//Arrays and variables for holding data
var words = ["ragnar", "spaghetti", "magic", "johnson", "cracker", "hamburger", "halloween"];
var wordSelector = "";
var totalLetters = [];
var underscore = 0;
var underscoreCorrect = [];
var lettersGuessed = [];

//Counters
var winsCounter = 0;
var livesRemaining = 9;

//Functions (resuable blocks of code that i will call upon when needed)
//=====================================================================

//start game when any key is pressed


function startGame () {
    wordSelector = words[Math.floor(Math.random() * words.length)];
    totalLetters = wordSelector.split("");
    underscore = totalLetters.length;

    //reset

    livesRemaining = 9;
    lettersGuessed = [];
    underscoreCorrect = [];

    // get underscore characters
    for (var i = 0; i < underscore; i++) {
        underscoreCorrect.push("_");
    }

    // HTML
    document.getElementById("currentWord").innerHTML = underscoreCorrect.join(" ");
    document.getElementById("remainingGuesses").innerHTML = livesRemaining;
    document.getElementById("wins").innerHTML = winsCounter;


    //Testing
    console.log(wordSelector);
    console.log(totalLetters);
    console.log(underscore);
    console.log(underscoreCorrect);
}

//Main Process
//===========================

//starts game
startGame();

//associates key clicks