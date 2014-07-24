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
	wayTooHigh: "Please guess A LOT lower",
	wayTooLow: "Please guess A LOT higher",
	tooHigh: "Please guess much lower",
	tooLow: "Please guess much higher",
	aBitHigh: "Please guess lower",
	aBitLow: "Please guess higher",
	tinyBitHigh: "Please guess just a bit lower",
	tinyBitLow: "Please guess just a bit higher",
	almostThere: "You are so close! Guess again",
	rightGuess: "Congratulations! You guessed the correct number",
	startOver: "Please click the Restart button to play again",
	validNumber: "Please enter a valid number 1-100",
	alreadyGuessed: "You have already guessed that number"
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
		document.getElementById("guessCoach").innerHTML = validNumber;
		document.getElementById("guessHelper").innerHTML = "";
	}
	else {
		if(repeatedNumber() == true) {
			document.getElementById("guessCoach").innerHTML = alreadyGuessed;
			document.getElementById("guessHelper").innerHTML = "";
		}
		else {
			guessCounter++;
			postGuesses();
			compareGuesses();

			if(guessCounter == 5) {
				if(guesses[currentGuess] == randomNumber) {
					document.getElementById("guessCoach").innerHTML = guessMessages.rightGuess;
					document.getElementById("guessHelper").innerHTML = guessMessages.startOver;
				}
				else {
					document.getElementById("guessCoach").innerHTML = "The correct number was " + randomNumber + ".";
					document.getElementById("guessHelper").innerHTML = guessMessages.startOver;
				}
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
		document.getElementById("guess" + guessCounter + "Box").style.backgroundColor="#1F8503";
		document.getElementById("guessCoach").innerHTML = guessMessages.rightGuess;
		document.getElementById("guessHelper").innerHTML = guessMessages.startOver;
	}
	else if(currentGuessDifference >= 50) {
		document.getElementById("guess" + guessCounter + "Box").style.backgroundColor="#E0473F";

		if(higherOrLower == "higher") {
			document.getElementById("guessHelper").innerHTML = guessMessages.wayTooHigh;
		}
		else {
			document.getElementById("guessHelper").innerHTML = guessMessages.wayTooLow;			
		}
	}
	else if (currentGuessDifference >= 25) {
		document.getElementById("guess" + guessCounter + "Box").style.backgroundColor="#E06D3F";

		if(higherOrLower == "higher") {
			document.getElementById("guessHelper").innerHTML = guessMessages.tooHigh;
		}
		else {
			document.getElementById("guessHelper").innerHTML = guessMessages.tooLow;			
		}
	}
	else if (currentGuessDifference >= 10) {
		document.getElementById("guess" + guessCounter + "Box").style.backgroundColor="#E0B83F";

		if(higherOrLower == "higher") {
			document.getElementById("guessHelper").innerHTML = guessMessages.aBitHigh;
		}
		else {
			document.getElementById("guessHelper").innerHTML = guessMessages.aBitLow;			
		}
	}
	else if (currentGuessDifference >= 3) {
		document.getElementById("guess" + guessCounter + "Box").style.backgroundColor="#ADE03F";

		if(higherOrLower == "higher") {
			document.getElementById("guessHelper").innerHTML = guessMessages.tinyBitHigh;
		}
		else {
			document.getElementById("guessHelper").innerHTML = guessMessages.tinyBitLow;			
		}
	}
	else {
		document.getElementById("guess" + guessCounter + "Box").style.backgroundColor="#62E03F";
		document.getElementById("guessHelper").innerHTML = guessMessages.almostThere;			
	}
}

function showAnswer() {
	document.getElementById("guessCoach").innerHTML = "The number is " + randomNumber;
	document.getElementById("guessHelper").innerHTML = guessMessages.startOver;
}

function showHint() {
	var lowRange = Math.round((randomNumber - (Math.random() * 100)));
	var highRange = Math.round((randomNumber + (Math.random() * 100)));

	if(lowRange < 0) {
		lowRange = 0;
	};
	if(highRange > 100) {
		highRange = 100;
	};
	document.getElementById("guessCoach").innerHTML = "The number is between " + lowRange + " and " + highRange;
}
