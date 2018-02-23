var word = "";
var placeHolder = "";
var words = ["cat", "dog"];
var guesses = 7;
var currentIndex = -1;
var wins = 0;
var losses = 0;

function pickAWord() {
    // Increase current word counter
    currentIndex++;
    // save the new current word in word variable
    word = words[currentIndex];
}

function createPlaceHolder(letter) {
    // if there is a letter input, update placeholder
    if (letter) {
        for (var i = 0; i < word.length; i++) {
            if (word[i] === letter) {
                placeHolder[i] = word[i];
            }
        }
    }
    // otherwise spit out _ _ _ _ _
    else {
        placeHolder = "";
        for (var i = 0; i < word.length; i++) {
            placeHolder.push("_");
        }
    }
}

function initialize() {
    console.log("initialize");
    // TODO: pick a word
    pickAWord();
    // TODO: create a placeholder
    createPlaceHolder();
    guesses = 7;
    // TODO: set guesses to 7
}

function start() {
    console.log("start");
    // TODO: get user input

}

function playGame() {
    initialize();
    start();
}

playGame();