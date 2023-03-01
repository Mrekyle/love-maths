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

function runGame() {

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