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
var guessMessages = {
	wayTooHigh: "Please guess MUCH lower",
	wayTooLow: "Please guess MUCH higher",
	tooHigh: "Please guess lower",
	tooLow: "Please guess higher",
	aBitHigh: "Please guess just a bit lower",
	aBitLow: "Please guess just a bit higher",
	tinyBitHigh: "Please guess a tiny bit lower",
	tinyBitLow: "Please guess a tiny bit higher",
	almostThere: "You are so close! Guess again.",
	rightGuess: "Congratulations! You guessed the correct number"
};
var guessCounter = 0;
var currentGuess = "";
var previousGuess = "";
var currentGuessDifference;
var previousGuessDifference;
var randomNumber;
var higherOrLower = "";

/******************************
FUNCTION DECLARATIONS
******************************/

//This code calls all functions when the submit button is clicked
function submitButton() {
	verifyNumber();
	guessCounter++;
	postGuesses();
	compareGuesses();
};

//This code generates the random Number
function generateRandomNumber() {
	randomNumber = Math.round(Math.random() *100);
	console.log("Random Number is: " + randomNumber);
}

function verifyNumber() {
	
}

function postGuesses() {
	currentGuess = "guess" + guessCounter;
	previousGuess = "guess" + (guessCounter - 1);
	guesses[currentGuess] = parseInt(document.getElementById("userInput").value);
	document.getElementById(currentGuess).innerHTML = guesses[currentGuess];	
}

function compareGuesses() {
	currentGuessDifference = Math.abs(guesses[currentGuess] - randomNumber);
	previousGuessDifference = Math.abs(guesses[previousGuess] - randomNumber);

	if(guessCounter == 1) {
		guessHelper();	
	}
	else {
		if(currentGuessDifference > previousGuessDifference){
			document.getElementById("guessCoach").innerHTML = "Colder";
			guessHelper();
		}
		else {
			document.getElementById("guessCoach").innerHTML = "Warmer";
			guessHelper();
		}
	}
}

function guessHelper() {
	if(guesses[currentGuess] > randomNumber) {
		higherOrLower = "higher";
	}
	else {
		higherOrLower = "lower";
	};


	if (guesses[currentGuess] == randomNumber) {
		document.getElementById("guessCoach").innerHTML = "";
		document.getElementById("guessHelper").innerHTML = guessMessages.rightGuess;
	}
	else if(currentGuessDifference >= 50) {
		if(higherOrLower == "higher") {
			document.getElementById("guessHelper").innerHTML = guessMessages.wayTooHigh;
		}
		else {
			document.getElementById("guessHelper").innerHTML = guessMessages.wayTooLow;			
		}
	}
	else if (currentGuessDifference >= 25) {
		if(higherOrLower == "higher") {
			document.getElementById("guessHelper").innerHTML = guessMessages.tooHigh;
		}
		else {
			document.getElementById("guessHelper").innerHTML = guessMessages.tooLow;			
		}
	}
	else if (currentGuessDifference >= 10) {
		if(higherOrLower == "higher") {
			document.getElementById("guessHelper").innerHTML = guessMessages.aBitHigh;
		}
		else {
			document.getElementById("guessHelper").innerHTML = guessMessages.aBitLow;			
		}
	}
	else if (currentGuessDifference >= 3) {
		if(higherOrLower == "higher") {
			document.getElementById("guessHelper").innerHTML = guessMessages.tinyBitHigh;
		}
		else {
			document.getElementById("guessHelper").innerHTML = guessMessages.tinyBitLow;			
		}
	}
	else {
		document.getElementById("guessHelper").innerHTML = guessMessages.almostThere;			
	}
}
