
// =============================================================
// DEFINITION OF VARIABLES
// =============================================================

// Array of bird names to guess

var birdNames = ["owl", "hawk", "parakeet", "crane", "vulture", "eagle", "swan", "bluebird", "hummingbird", "ostrich", "pigeon", "dove", "heron", "toucan", "meadowlark", "pelican", "wren","emu", "chicken", "robin", "puffin", "albatross", "parrot", "penguin", "sparrow", "bunting", "chickadee", "falcon", "grouse", "kiwi", "magpie", "osprey", "peacock", "turkey"];

// Empty variable to store the current word
    var currentWord = "";

// Empty array to hold the letters in the currentWord
    var currentWordLetters = [];

// Variable that holds the number of blanks "_" in the currentWord
    var numberBlanks = 0;

// Empty array to store the answer
    var answerDisplay = []

// Empty array to hold the wrong guesses 
    var wrongLetters = [];

// Game Stat Variables 
    var wins = 0;
    var losses = 0;
    var guessesLeft = 15;

// Variable for audio to play for win or loss
    var winAudio = new Audio('./assets/audio/meadowlark_daniel-simion.mp3');
    var loseAudio = new Audio('./assets/audio/Crow_Call_2-JimBob-1215724899.mp3');

// =============================================================
// FUNCTIONS
// =============================================================

// Function to begin a new game
function newGame () {

    // Random word chosen from the birdNames array for the user to guess
        currentWord = birdNames[Math.floor(Math.random() * birdNames.length)];
            console.log("The current word is: " + currentWord);
    
    //Break currentWord into individual letters 
        currentWordLetters = currentWord.split("");
            // console.log("The current word's letters are: " + currentWordLetters);

    //Set the number of blanks to display based on the number of letters in the current word;
        numberBlanks = currentWordLetters.length;
            console.log("The number of letters in the current word is: " + numberBlanks);

    // Reset game variables
        guessesLeft = 15;
        wrongLetters = [];
        answerDisplay = []

    // Add the correct number of blanks to the answerDisplay that correspond to the length of the currentWord
        for (i = 0; i <numberBlanks; i++) {
            answerDisplay.push("_");
            // console.log(answerDisplay);
            }
        
     // Update HTML elements to display current information
        document.getElementById("theWord").innerHTML = answerDisplay.join(" ");
        document.getElementById("remainingGuesses").innerHTML = guessesLeft;
        document.getElementById("wins").innerHTML = wins;
        document.getElementById("losses").innerHTML = losses;

    // Stops audio if still playing
        winAudio.pause();
        winAudio.currentTime=0;
        loseAudio.pause();
        loseAudio.currentTime=0;
    }

// Function to check whether user's input is a letter; if a letter, run the comparison against the current word
function checkLetters(letter) {
        
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        var correctLetter = false;
        for (var i = 0; i <numberBlanks; i++) {
            if (currentWord[i] === letter) {
            correctLetter = true;
            }
         }
    //Check the position of the correct letter in the word
        if(correctLetter) {
            for (var i = 0; i <numberBlanks; i++) {
            if(currentWord[i] === letter) {
                answerDisplay[i] = letter;
                }
            }
        }
    //If the letter is not part of the word
        else {
            if(!wrongLetters.includes(letter)) {
                wrongLetters.push(letter);
                console.log(answerDisplay);
            }
        } 
        guessesLeft--;
    }

    // If the user input is NOT a letter, alert the user
        else { 
        alert("Please be sure to select a letter from a to z.")
        }
    }

// Function to complete the round and update game stats in HTML
    
function roundComplete() {
    console.log("Win count: " + wins + "| Loss count: " + losses + "| Guesses left: " + guessesLeft)

    document.getElementById("remainingGuesses").innerHTML = + guessesLeft;
    document.getElementById("theWord").innerHTML = answerDisplay.join(" ");
    document.getElementById("guessedLetters").innerHTML = " " + wrongLetters.join(" ");

    // Check whether the user won, add 1 to wins, play sound, and alert user that they won
    if (currentWordLetters.toString() === answerDisplay.toString()){
        document.getElementById("theWord").innerHTML = answerDisplay.join("");
        wins++;
        winAudio.play();

        alert("Congratulations! You guessed " + "'" + currentWord + "'" + " correctly. Let's play again!");
    
    // Update wins in HTML
    document.getElementById("wins").innerHTML = wins;

    // Start new game and clear all letters already guessed
    document.getElementById("guessedLetters").innerHTML = " ";

    newGame()

    }
    // If the user lost
    else if (guessesLeft === 0) {
        losses++;
        loseAudio.play();

        alert("So sorry! You are out of guesses. The correct word was '"+ currentWord +".' Let's play again, with a new bird word!");

        // Update losses in HTML
        document.getElementById("losses").innerHTML = "Losses: " + " " + losses;

    // Start new game and clear all letters already guessed
    newGame()

    document.getElementById("guessedLetters").innerHTML = " ";
    }
}

// =============================================================
// GAME PROCESS
// =============================================================

// Call function to start the game the first time
    newGame()

// Get user's input
    document.onkeyup = function(event) {
        // Create variable to hold all the letter that have been guessed
        var lettersGuessed = String.fromCharCode(event.keyCode).toLowerCase();
        console.log("You guessed the letter: " + lettersGuessed);
    
// Call the checkLetters function
    checkLetters(lettersGuessed);

 // Call the roundComplete function
    roundComplete();
    }