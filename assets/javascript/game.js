var words = ["RAGNAR", "SPAGHETTI", "MAGIC", "JOHNSON", "CRACKER", "HAMBURGER", "HALLOWEEN"];
var wordSelector = "";
var totalLetters = [];
var underscore = 0;
var winsCounter = 0;
var guessesRemaining = 9;


function startGame() {
    wordSelector = words[Math.floor(Math.random() * words.length)];
    totalLetters = wordSelector.split("");
    underscore = totalLetters.length;


    var guessesRemaining = 9;
    var lettersGuessed = [];


    console.log(wordSelector);
    console.log(totalLetters);
    console.log(underscore);
}

function letterCheck(letter) {

    var letterInWord = false;

    for (var i = 0; i < underscore; i++) {
        if (wordSelector[i] === letter) {
            letterInWord = true;
        }
    else {
        lettersGuessed.push(letter);
        guessesRemaining--;
    }

}

function roundOver() {
    console.log("Win Count: " + winsCounter + " | Guesses Left: " + guessesRemaining);

    document.getElementById("remainingGuesses").innerHTML = guessesRemaining;
    document.getElementById("lettersGuessed").innerHTML = lettersGuessed.join(" ");

}

startGame();

document.onkeyup = function (event) {

    var letterGuessed = String.fromCharCode(event.keyCode).toUpperCase();
    letterCheck(letterGuessed);

    roundOver();

    console.log(letterGuessed);
}