const guessInput = document.getElementById("guess");
const submitButton = document.getElementById("submit");
const resetButton = document.getElementById("reset");
const messages = document.getElementsByClassName("message");
const tooHighMessage = document.getElementById("too-high");
const tooLowMessage = document.getElementById("too-low");
const maxGuessesMessage = document.getElementById("max-guesses");
const numberOfGuessesMessage = document.getElementById("number-of-guesses");
const correctMessage = document.getElementById("correct");
const belowMessage = document.getElementById("below-1");
const aboveMessage = document.getElementById("above-99");

let targetNumber;
let attempts = 0;
let maxNumberOfAttempts = 5;

// Returns a random number from min (inclusive) to max (exclusive)
// Usage:
// > getRandomNumber(1, 50)
// <- 32
// > getRandomNumber(1, 50)
// <- 11
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function checkGuess() {
  // Get value from guess input element
  const guess = parseInt(guessInput.value, 10);
  hideAllMessages();

  //Prevent submitting numbers below 1 and above 99
  if (guess < 1) {
    belowMessage.style.display = "";
  } else if (guess > 99) {
    aboveMessage.style.display = "";
  } else {
    attempts = attempts + 1;

    if (guess === targetNumber) {
      numberOfGuessesMessage.style.display = "";
      numberOfGuessesMessage.innerHTML = `You made ${attempts} guesses`;

      correctMessage.style.display = "";

      submitButton.disabled = true;
      guessInput.disabled = true;
    }

    if (guess !== targetNumber) {
      if (guess < targetNumber) {
        tooLowMessage.style.display = "";
      } else {
        tooHighMessage.style.display = "";
      }

      const remainingAttempts = maxNumberOfAttempts - attempts;

      numberOfGuessesMessage.style.display = "";
      if (remainingAttempts === 1) {
        numberOfGuessesMessage.innerHTML = `You guessed ${guess}. <br> ${remainingAttempts} guess remaining`;
      } else {
        numberOfGuessesMessage.innerHTML = `You guessed ${guess}. <br> ${remainingAttempts} guesses remaining`;
      }
    }

    if (attempts === maxNumberOfAttempts) {
      submitButton.disabled = true;
      guessInput.disabled = true;
    }

    guessInput.value = "";

    resetButton.style.display = "";
  }
}

function hideAllMessages() {
  for (let elementIndex = 0; elementIndex < messages.length; elementIndex++) {
    messages[elementIndex].style.display = "none";
  }
}

function setup() {
  // Get random number
  targetNumber = getRandomNumber(1, 100);
  console.log(`target number: ${targetNumber}`);

  // Reset maxNumberOfAttempts
  maxNumberOfAttempts = 5;

  //Reset number of attempts
  attempts = 0;

  // Enable the input and submit button
  submitButton.disabled = false;
  guessInput.disabled = false;

  hideAllMessages();
  resetButton.style.display = "none";
}

submitButton.addEventListener("click", checkGuess);
resetButton.addEventListener("click", setup);

setup();

// 1) line 8 - edited num to number
// 2) line 46 - change Low to High >> tooHighMessage.style.display = "";
// 3) line 55 - removed =
// 4) line 71 - correct spelling of function
// 5) line 77 - changed maxNumberOfAttempts from 0 to 5;
// 6) line 83 - correct spelling of disabled
// 7) line 80 - added code to reset number of attempts
// 8) line 66 - remove = from <=messages.length
// 9) line 12 and 13 - change const to let
