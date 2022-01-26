let playerScore = 0; // initial score Player
let computerScore = 0; // initial score PC

for (let game = 0; game < 5; game++) { // Loop for 5 games

    let playerInput = prompt ('Rock, Paper or Scissors?'); // player enters input

    if (playerInput !== null) {
    playerInput = playerInput.toLowerCase()
    } // case insensitive

    let computerNumber = Math.floor(Math.random()*3) + 1; // creates a random number between 1 and 3

// function that allocates random number to choice
    function computerPlay () {
        if (computerNumber === 1) {
        return 'rock'
        }
        else if (computerNumber === 2) {
        return 'scissors'
        }
        else {
        return 'paper';
        }
    }   

//function allocates decision to number
    function playerSelection() {

        if (playerInput === 'rock') {
        return '1'
        }
        else if (playerInput === 'scissors') {
        return '2'
        }
        else if (playerInput === 'paper') {
        return '3'
        }
    }

// playerSelection(playerInput);
// console.log(playerInput);


// function that determines winner
        function playRound() {
  
            if ((playerSelection() - computerNumber === -1) || ((playerSelection() - computerNumber) === 2)) {
        

            playerScore++;

            return('You win! '+ playerInput + ' beats ' + computerPlay());
            }
            else if (((playerSelection() - computerNumber === 1) || (playerSelection() - computerNumber) === -2)) {

            // console.log(computerScore);
            computerScore++;
            // console.log(computerScore);

            return('You lose! '+ computerPlay() + ' beats ' + playerInput);

 

            }
            else  if ((playerSelection() - computerNumber === 0)) {
            return('Tie game!')
            }
            else {
            return('invalid option')
            }
        }



    console.log(playRound());

    console.log('player score = ',playerScore);
    console.log('computer score = ',computerScore);
    // alert(playRound()); // alerts winner
// alert(computerScore);
// alert(playerScore);
}