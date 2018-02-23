var words = ["RAGNAR", "SPAGHETTI", "MAGIC", "JOHNSON", "CRACKER", "HAMBURGER", "HALLOWEEN"];
var wordSelector = "";
var totalLetters = [];
var underscore = 0;
var underscoreCorrect = [];
var lettersGuessed = [];
var winsCounter = 0;
var guessesRemaining = 9;


function startGame() {
    wordSelector = words[Math.floor(Math.random() * words.length)];
    totalLetters = wordSelector.split("");
    underscore = totalLetters.length;


    guessesRemaining = 9;
    lettersGuessed = [];
    underscoreCorrect = [];

    for (var i = 0; i < underscore; i++) {
        underscoreCorrect.push("_");
    }

    document.getElementById("currentWord").innerHTML = underscoreCorrect.join(" ");
    document.getElementById("remainingGuesses").innerHTML = guessesRemaining;
    document.getElementById("wins").innerHTML = winsCounter;

}

function letterCheck(letter) {

    var letterInWord = false;

    for (var i = 0; i < underscore; i++) {
        if (wordSelector[i] === letter) {
            letterInWord = true;
        }
    }
    if (letterInWord) {
        for (var i = 0; i < underscore; i++) {
            if (wordSelector[i] === letter) {
                underscoreCorrect[i] = letter;
            }
        }
    } else {
        lettersGuessed.push(letter);
        guessesRemaining--;
    }
}

function roundOver() {
    document.getElementById("remainingGuesses").innerHTML = guessesRemaining;
    
    document.getElementById("currentWord").innerHTML = underscoreCorrect.join(" ");
    document.getElementById("lettersGuessed").innerHTML = lettersGuessed.join(" ");

    if (totalLetters.toString() === underscoreCorrect.toString()) {
        winsCounter++;
        alert("You Won!");

        document.getElementById("wins").innerHTML = winsCounter;

        startGame();
    } else if (guessesRemaining === 0) {
        alert("You Lost!");

        startGame();
    }
}

startGame();

document.onkeyup = function (event) {

    var letterGuessed = String.fromCharCode(event.keyCode).toUpperCase();
    letterCheck(letterGuessed);

    roundOver();
}