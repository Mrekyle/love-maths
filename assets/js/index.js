// Runs when the content/page is loaded.

document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.getElementsByTagName('button');

    // for (let i = 0; i < buttons.length; i++); iterates through the index of the returned array 
    for (let button of buttons) { // iterates through the array in a modern syntax.
        button.addEventListener('click', function() { // When any button is clicked it will execute the function in the current scope
            if (this.getAttribute('data-type') === 'submit') { // If the button with the same datatype is clicked it will activate the alert
                checkAnswer();
            } else {
                let gameType = this.getAttribute('data-type'); // If another button is clicked it will alert the user what button has been
                    // alert(`You Clicked ${gameType}`); Clicked and display what button was clicked
                    runGame(gameType);
            }
        });
    } 

    document.getElementById('answer-box'),this.addEventListener('keydown', function(event) {
        if (event.key === "Enter");
        checkAnswer();
        // Above code listens for an event of the enter key being pressed. Allowing us to register that event and call the check answer function
    })

    runGame('addition');

});

// A descriptive docstring above the function gives a basic description when the function has been called

/**
 * The main game 'loop', called when the script is loaded
 * and once the users answer has been processed
 */
function runGame(gameType) {

    document.getElementById('answer-box').value = ''; // Each time the game has been run and the answer inputted it sets the box to an empty string
                                                    // So the user doesn't have to delete the old answer before playing again
    document.getElementById('answer-box').focus(); // Sets the focus of the page to the answer box, so the user doesn't have to manually select each time
    
    // Generates a random number between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === 'addition') {
        displayAdditionQuestion(num1, num2); // Displays the randomly generated number on the DOM, based on the function
    } else if (gameType === 'subtract') {
        displaySubtractQuestion(num1, num2);
    } else if (gameType === 'multiply') {
        displayMultiplyQuestion(num1, num2);
    } else if (gameType === 'division') {
        displayDivideQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`); // If an error occurs or the wrong game type is entered it outputs the unknown alert
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
}

/**
 * Takes the 2 operands that were generated along with the operator
 * and calculates the correct answer
 */
function checkAnswer () {
    let userAnswer = parseInt(document.getElementById('answer-box').value); // Value is used as we need a number not a string. In conjunction with parseInt 
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0]; // Checks if the users answer and the calculated answer match and are correct

    if(isCorrect) {
        // alert('Congratulations you got the correct answer'); // Alerts if the user gave the correct answer
        incrementScore(); // If the answer inputted is correct it will increment the correct answer on the page
    } else {
        alert(`Awww.... Too bad, the correct answer is ${calculatedAnswer[0]}`); // Alerts if the wrong answer given and given the correct answer
        incrementWrongAnswer(); // If the answer is wrong will call the function to increment the wrong answer
    }

    runGame(calculatedAnswer[1]);
}

/**
 * Checks and compares the answer of the two generated operands to the users input from the dom
 */
function calculateCorrectAnswer () {
    let operand1 = parseInt(document.getElementById('operand1').innerText); // Getting the operand number and placing them in the variable.
    let operand2 = parseInt(document.getElementById('operand2').innerText); // parseInt ensures that it is a number not a string
    let operator = document.getElementById('operator').innerText; // As default js returns a sting from the DOM

    if(operator === '+') {
        return [operand1 + operand2, 'addition']; // As long as the operator is addition it returns the sum of both operands
    } else if (operator === '-') {
        return [operand1 - operand2, 'subtract'];
    } else if (operator === 'x') {
        return [operand1 * operand2, 'multiply'];
    } else if (operator === '/') {
        return [operand1 / operand2, 'division'];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw(`Unimplemented operator ${operator}. Aborting!`);
    }
}

/**
 * Gets current score from the DOM and increments the score by one each time the correct answer is inputted
 */
function incrementScore () {
    let oldScore = parseInt(document.getElementById('score').innerText); // Gets the score datatype and stores in the variable
    document.getElementById('score').innerText = ++oldScore; // Adds one to the score and passes it back to the DOM
} 

/**
 * Gets the current score from the DOM and increments the wrong answer score by one each time the wrong answer is inputted
 */
function incrementWrongAnswer () {
    let wrongAnswer = parseInt(document.getElementById('incorrect').innerText);
    document.getElementById('incorrect').innerText = ++wrongAnswer;
}

/**
 * Displays a randomly generated number in the operand id along with the type of 
 * sum that is being performed
 */
function displayAdditionQuestion (operand1, operand2) {
    document.getElementById('operand1').textContent = operand1; // Gets the id and inputs the random number generated by the run game function
    document.getElementById('operand2').textContent = operand2; // Inserting the number into the text content in the html
    document.getElementById('operator').textContent = "+" // Inserting what the operator is into the operator area
}

function displaySubtractQuestion (operand1, operand2) {
    document.getElementById('operand1').textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById('operand2').textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById('operator').textContent = '-';
}

function displayMultiplyQuestion (operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = 'x';
}

function displayDivideQuestion (operand1, operand2) {
    operand1 = operand1 * operand2;
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = '/';
}