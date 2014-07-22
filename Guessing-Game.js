var userGuess;
var randomNumber = Math.round(Math.random() * 100);
var promptUser = function(displayMessage) {
	userGuess = prompt(displayMessage);
	userGuess = parseInt(userGuess);
	if(userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
		promptUser(wrongEntry);
	}
	return userGuess;
};
var guessCount = 0;

var changeGuess = function() {
	currentGuess = "guess" + guessCount;
	document.getElementById(currentGuess).innerHTML=document.getElementById("userInput").value;
}

//Guess Messages
var enterGuess = "Please enter your best guess";
var veryColdHigher = "Very cold, guess much higher";
var veryColdLower = "Very cold, guess much lower";
var coldHigher = "Cold, guess higher";
var coldLower = "Cold, guess lower";
var warmHigher = "Warm, but guess just a bit higher";
var warmLower = "Warm, but guess just a bit lower";
var hotHigher = "Hot! Guess just a teensy bit higher";
var hotLower = "Hot! Guess just a teensy bit lower";
var veryClose = "You are within 3!";
var wrongEntry = "That is not a number between 1 - 100.  Please guess again";


////////////////////////////////////////////////////////////
console.log(randomNumber);

promptUser(enterGuess);

for(var i=0; i<5; i++) {

	guessCount++;

	var difference = Math.abs(randomNumber-userGuess);

	if(randomNumber == userGuess) {
		alert("Hooray, you did it!");
		break;
	}
	else if(difference > 50) {
		if(randomNumber > userGuess) {
			promptUser(veryColdHigher);
		}
		else {
			promptUser(veryColdLower);
		}
	}
	else if(25 < difference && difference <= 50) {
		if(randomNumber > userGuess) {
			promptUser(coldHigher);
		}
		else {
			promptUser(coldLower);
		}
	}
	else if(10 < difference && difference <= 25) {
		if(randomNumber > userGuess) {
			promptUser(warmHigher);
		}
		else {
			promptUser(warmLower);
		}
	}
	else if(2 < difference && difference <= 10) {
		if(randomNumber > userGuess) {
			promptUser(hotHigher);
		}
		else {
			promptUser(hotLower);
		}
	}
	else {
		promptUser(veryClose);
	}
}
