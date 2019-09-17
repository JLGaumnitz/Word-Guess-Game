// PSEUDO-CODE FOR THE WORD GUESS GAME

// Computer randomly chooses a word from the array of bird names and displays how many guesses the PLAYER will be allowed.

// Display "Press any letter to begin!"

// PLAYER presses a key.

// Check whether the PLAYER's input is a  letter and change it to lower-case.

// If it is not a letter, alert "Please press a single letter."

// If it is a letter, match it against each letter in the bird name.

// If the user's guess is not a match, add it to and display it in the list of "Letters Guessed" and subtract 1 from the number of guesses remaining.

// If the user's guess is a letter that was already guessed (already in "Letters Guessed"), do not accept it again.

// If it is a match, add it to and display it in the word being guessed (at each place that the letter appears) and subtract 1 from the number of guesses remaining.

// Continue with the entering of keys and the matching against the word until the word is correctly guessed or the number of guesses remaining is 0.

// When the player wins, play a bird call and add 1 to the counter of Wins. Load the next word to guess.

// When the player loses, play a different bird call, display the correct answer, and add 1 to the counter of Losses. Load the next word to guess.


// NEED TO INCLUDE A WAY FOR THE PLAYER TO QUIT AT ANY POINT.


// -----------------------------------------------

// DEFINITION OF VARIABLES

// Array of bird names to guess
    var birdNames = ["owl", "hawk", "parakeet", "crane", "vulture", "eagle", "swan", "bluebird", "hummingbird", "ostrich", "pigeon", "dove", "heron", "toucan", "meadowlark", "pelican", "wren"];

// Variables to hold the number of wins and losses, starting each at 0.
    var wins = 0; // number of wins
    var losses = 0; // number of losses

// Other Variables
    var maxGuesses = 15; // maximum number of guesses 
    var guessedLetters = []; // store the guessed letters
    var guessesRemaining = 0; // number of guesses remaining
   
// Random word chosen from the birdNames array for the user to guess
    var wordToGuess = birdNames[Math.floor(Math.random() * birdNames.length)];
    console.log(wordToGuess)

// Creation of an answer array
    var answerArray = [];
    for (var i = 0; i <wordToGuess.length; i++) {
            answerArray[i] = "_";
        }
     console.log(answerArray)


// Function that runs when user presses a key
     document.onkeyup = function(event) {
        var userGuess = event.key;
// Deducts 1 from number of guesses remaining
         guessesRemaining--;
        }


//Function to check the key that was pressed NOTE: NOT FINISHED WITH THIS... COULDN"T GET IT TO WORK.
    function checkGuess(userGuess) {
    //if letter is not already in guessedLetters array then push the letter to the guessedLetters array
        if (guessedLetters.indexOf(userGuess) === -1) {
            guessedLetters.push(userGuess);
   
        //if letter is in answer then replace the positioned "_" with the letter
        } else { 
             for (var i = 0; i < wordToGuess.length; i++) {
              if (userGuess === wordToGuess[i]) {
               answerArray[i] = letter;
                } 
            }                
        }
    }
 

// Display the user guesses and update the HTML from the functions

function updateScreen() {
    document.getElementById("wins-text").innerText = wins;
    document.getElementById("losses-text").innerText = losses;
    document.getElementById("guessesRemaining").innerText = guessesRemaining;
    document.getElementById("blanks-for-letters-in-word").innerText = answerArray;
    document.getElementById("guessedLetters").innerText = guessedLetters;
};
// call the function named "checkGuess"
checkGuess()

// call the function named "updateScreen"
updateScreen();




