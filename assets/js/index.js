// Runs when the content/page is loaded.

document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.getElementsByTagName('button');

    // for (let i = 0; i < buttons.length; i++); iterates through the index of the returned array 
    for (let button of buttons) { // iterates through the array in a modern syntax.
        button.addEventListener('click', function() { // When any button is clicked it will execute the function in the current scope
            if (this.getAttribute('data-type') === 'submit') { // If the button with the same datatype is clicked it will activate the alert
                alert("You clicked the submit button");
            } else {
                let gameType = this.getAttribute('data-type'); // If another button is clicked it will alert the user what button has been
                    alert(`You Clicked ${gameType}`); // Clicked and display what button was clicked
            }
        });
    } 

});

// A descriptive docstring above the function gives a basic description when the function has been called

/**
 * The main game 'loop', called when the script is loaded
 * and once the users answer has been processed
 */
function runGame() {

    // Generates a random number between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
}

function checkAnswer () {

}

function calculateCorrectAnswer () {

}

function incrementScore () {

} 

function incrementWrongAnswer () {

}

function displayAdditionQuestion () {

}

function displaySubtractQuestion () {

}

function displayMultiplyQuestion () {

}

function displayDivideQuestion () {

}