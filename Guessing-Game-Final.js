/*****************************
CODE RUN WHEN PAGE LOADS
*****************************/
generateRandomNumber();




/*****************************
VARIABLE DECLARATIONS
*****************************/
var guesses = {
	guess1:undefined,
	guess2:undefined,
	guess3:undefined,
	guess4:undefined,
	guess5:undefined
};
var guessCounter = 0;
var currentGuessNumber = "";
var previousGuessNumber = "";
var warmer = "Warmer";
var colder = "Colder";
var correctChoice = "Congratulations! You guessed the correct number.  Please Play again!";
var guessAgain = "Guess Again";
var currentGuess;
var randomNumber;

/******************************
FUNCTION DECLARATIONS
******************************/

//This code calls all functions when the submit button is clicked
function submitButton() {

};

//This code generates the random Number
function generateRandomNumber() {
	randomNumber = Math.round(Math.random() *100);
	console.log("Random Number is: " + randomNumber);
}

//This code checks the current user guess against the random number and displays proper messages
function compareGuess() {
	guesses[] = parseInt(document.getElementById("userInput").value);
	var difference = Math.abs(currentGuess - randomNumber);
}

// This code allows the current guess to be posted to the choices div on each successive guess
function changeGuess() {
	guessCounter++;
	currentGuessNumber = "guess" + guessCounter;
	previousGuessNumber = "guess" + (guessCounter -1);
	document.getElementById(currentGuessNumber).innerHTML = document.getElementById("userInput").value;
	guesses[currentGuessNumber] = document.getElementById("userInput").value;
}

function storeGuesses() {
	guesses[currentGuessNumber] = currentGuess;
}

function warmerColder() {
	if(guessCounter == 1) {
		compareGuess();
	}
	else {
		console.log(Math.abs(guesses[currentGuessNumber] - randomNumber))
		console.log("Current guess difference: " + Math.abs(guesses[currentGuessNumber] - randomNumber));
		console.log(Math.abs(guesses[previousGuessNumber] - randomNumber))
		console.log("Previous guess difference: " + Math.abs(guesses[previousGuessNumber] - randomNumber));

		if(Math.abs(guesses[currentGuessNumber] - randomNumber) > Math.abs(guesses[previousGuessNumber] - randomNumber)) {
			document.getElementById("guessCoach").innerHTML = "Colder";
		}
		else {
			document.getElementById("guessCoach").innerHTML = "Warmer";

		}
	}
}

