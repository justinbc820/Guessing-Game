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
	almostThere: "You are so close! Guess again",
	rightGuess: "Congratulations! You guessed the correct number",
	startOver: "Please click the Restart button to play again"
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
	
	if(verifyNumber() == false) {
		document.getElementById("guessCoach").innerHTML = "Please enter a valid number 1-100";
		document.getElementById("guessHelper").innerHTML = "";
	}
	else {
		if(repeatedNumber() == true) {
			document.getElementById("guessCoach").innerHTML = "You have already guessed that number";
			document.getElementById("guessHelper").innerHTML = "";
		}
		else {
			guessCounter++;
			postGuesses();
			compareGuesses();

			if(guessCounter == 5) {
				document.getElementById("guessCoach").innerHTML = "The correct number was " + randomNumber + ".";
				document.getElementById("guessHelper").innerHTML = guessMessages.startOver;
			}
		}
	}
};

//This code generates the random Number
function generateRandomNumber() {
	randomNumber = Math.round(Math.random() * 100);
	console.log("Random Number is: " + randomNumber);
}

function verifyNumber() {
	if(document.getElementById("userInput").value < 1) {
		return false;
	}
	else if(document.getElementById("userInput").value > 100) {
		return false;
	}
	else if(isNaN(document.getElementById("userInput").value)) {
		return false;
	}
	else {
		return true;
	}
}

function repeatedNumber() {
	for(var i=guessCounter; i>0; i--) {
		console.log("Most Recent Guess: " + parseInt(document.getElementById("userInput").value));
		console.log("A prior guess: " + guesses["guess" + i]);
		if(parseInt(document.getElementById("userInput").value) == guesses["guess" + i]) {
			return true;
		} 
	}
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
		document.getElementById("guessCoach").innerHTML = guessMessages.rightGuess;
		document.getElementById("guessHelper").innerHTML = guessMessages.startOver;
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
