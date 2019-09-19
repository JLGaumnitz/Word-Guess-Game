
// Computer randomly chooses a word from the array of bird names and displays "Guesses remaining."

// Display "Press any letter to begin guessing a kind of bird"

// PLAYER presses a key.

// Check whether the PLAYER's input is a letter and change it to lower-case.

// If it is not a letter, alert "Please press a single letter."

// If it is a letter, match it against each letter in the bird name.

// If the user's guessed letter is not a match, add it to and display it in the list of "Letters Guessed" and subtract 1 from the number of guesses remaining.

// If the user's guess is a letter that was already guessed (already in "Letters Guessed"), do not accept it as a choice again.

// If it is a match, add it to and display it in the correct blank of the word being guessed (at each place that the letter appears) and subtract 1 from the number of guesses remaining.

// Continue with the entering of letters and the matching against the word until the word is correctly guessed or the number of guesses remaining is 0.

// When the player wins, play a bird call and add 1 to the counter of Wins. Load the next word to guess and re-set the number of guesses and the letters guessed fields.

// When the player loses, play a different bird call, display the correct answer, and add 1 to the counter of Losses. Load the next word to guess and re-set the number of guesses and the letters guessed fields.


// NEED TO INCLUDE A WAY FOR THE PLAYER TO QUIT THE GAME AT ANY POINT?


// =============================================================
// DEFINITION OF VARIABLES
// =============================================================

// Array of all possible bird names to guess

    var birdNames = ["owl", "hawk", "parakeet", "crane", "vulture", "eagle", "swan", "bluebird", "hummingbird", "ostrich", "pigeon", "dove", "heron", "toucan", "meadowlark", "pelican", "wren","emu", "chicken", "robin"];

// Empty variable to store the current word to be guessed as a string
    var currentWord = "";

// Empty array to hold the letters in the currentWord
    var currWrdLtrs = [];

// Variable that holds the number of blanks "_" in the currentWord
    var numBlanks = 0;

// Empty array to store the answer as it displays for the user
    var answerDisplay = []

// Empty array to hold the wrong guess and display to userGuess
    var wrongLtrs = [];

// Game Stat Variables 
    var wins = 0;
    var losses = 0;
    var guessesLeft = 15;

// =============================================================
// FUNCTIONS
// =============================================================

    // Function to start a new game
    function newGame () {

        // Random word chosen from the birdNames array for the user to guess
        currentWord = birdNames[Math.floor(Math.random() * birdNames.length)];
            console.log("The current word is: " + currentWord);
    
        //Break currentWord into individual letters 
        currWrdLtrs = currentWord.split("");
            console.log("The current word's letters are: " + currWrdLtrs);

        //Set the number of blanks based on the number of letters in the current word;
        numBlanks = currWrdLtrs.length;
            console.log("The number of letters in the current word is: " + numBlanks);

        // Reset the game variables
        guessesLeft = 15;
        wrongLtrs = [];
        answerDisplay = []

        // Add the correct number of blanks to the answerDisplay that corresond to the length of the currentWord
        for (i = 0; i <numBlanks; i++) {
            answerDisplay.push("_");
            console.log(answerDisplay);
            }
        
        // Update HTML elements to display current information
        document.getElementById("theWord").innerHTML = answerDisplay.join(" ");
        document.getElementById("remGuesses").innerHTML = guessesLeft;
        document.getElementById("wins").innerHTML = wins;
        document.getElementById("losses").innerHTML = losses;
    }

    // Chech whether user's letter is an actual letter; if it IS a letter, then run the comparison against the current word
    function checkLtrs(letter) {
        
    if (event.keyCode >= 65 && event.keyCode <= 90) {

            var correctLetter = false;

            for (var i = 0; i <numBlanks; i++) {
                if (currentWord[i] === letter) {
                    correctLetter = true;
                }
            }
    //Check the position of the correct letter in the word and then add to the html
        if(correctLetter) {
                for (var i = 0; i <numBlanks; i++) {
                if(currentWord[i] === letter) {
                    answerDisplay[i] = letter;
                }
            }
        }
    //If the letter is not part of the word
        else {
            wrongLtrs.push(letter);
            guessesLeft--;
                console.log(answerDisplay);
        } 
    }

    // If the user input is NOT a letter, alert the user
        else {
        alert("Please be sure to select a letter from a to z.")
    }

    }

// Function to complete the round and update game stats in HTML
function roundComplete() {
    console.log("Win count: " + wins + "| Loss count: " + losses + "| Guesses left: " + guessesLeft)

    document.getElementById("remGuesses").innerHTML = + guessesLeft;
    document.getElementById("theWord").innerHTML = answerDisplay.join(" ");
    document.getElementById("guessedLetters").innerHTML = " " + wrongLtrs.join(" ");

    // Check whether the user won
    if (currWrdLtrs.toString() == answerDisplay.toString()){
        wins++;
        alert("Congratulations! You guessed " + "'" + currentWord + "'" + " correctly. Do you want to play again?");
        console.log("You won!");
    
    // Update wins in HTML
    document.getElementById("wins").innerHTML = "Wins: " + " " + wins;

    // Start new game and clear all letters already guessed
    newGame()
    document.getElementById("guessedLetters").innerHTML = " ";

    }
    // Check whether the user lost
    else if (guessesLeft === 0) {
        losses++;
        alert("I'm so sorry. You have 0 guesses left. The correct word was '"+ currentWord +".' Do you want to play again?")
        console.log("You lost!");

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
    var ltrsGuessed = String.fromCharCode(event.keyCode).toLowerCase();
        console.log("You guessed the letter: " + ltrsGuessed);
    
// Call the check letters function
    checkLtrs(ltrsGuessed);

// Call the roundComplete function
    roundComplete();
}




