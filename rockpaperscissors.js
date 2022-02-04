window.addEventListener('click', function (e) { // starts game once user clicks button
    if (e.target.id === ''|| i===2 || j===2) return; // if user does not click on button exit function

    function computerPlay() { // computer randomly selects
        const computerNumber = Math.floor(Math.random()*3) + 1; 
        if (computerNumber === 1) {
            return 'Rock'
        } else if (computerNumber === 2) {
            return 'Scissors'
        } else {
            return 'Paper';
        }
    }



    function playRound(playerSelection, computerSelection) { // rock paper scissors logic
        while (i<2 && j<2) {
            if ((playerSelection === 'Rock' && computerSelection ==='Scissors') || (playerSelection === 'Paper' && computerSelection === 'Rock') || 
            (playerSelection === 'Scissors' && computerSelection === 'Paper')) {
                i++;
                return `You win ${playerSelection} beats ${computerSelection}` 
                }
            if ((playerSelection === 'Rock' && computerSelection ==='Paper') || (playerSelection === 'Paper' && computerSelection === 'Scissors') || 
            (playerSelection === 'Scissors' && computerSelection === 'Rock')) {
                j++;
                return `You lose ${computerSelection} beats ${playerSelection}` 
                }
            if (playerSelection === computerSelection) {
                return `${playerSelection} ties against ${computerSelection}`
                }
            }
        

    }
    const computerSelection = computerPlay(); // stores return function into constant var
    const playerSelection = e.target.id; //stores selection into constant var
    
    const result = document.querySelector('p')
    result.textContent = playRound(playerSelection, computerSelection);
    
    const score = document.createElement('div');
    score.classList.add('score');
    score.textContent = `Score: Player ${i} Computer ${j}`;
    result.appendChild(score);

    const winner = document.createElement('div');
    winner.classList.add('winner');
    result.appendChild(winner);

    if (i===2) {
        winner.textContent = 'Player Wins!';

    } else if (j===2) {
        // console.log(j);
        winner.textContent = 'Computer Wins!';
    }

    if (i===2 || j===2) {
    const playAgain = document.createElement('button');
    playAgain.classList.add('playAgain');
    playAgain.textContent = 'Play Again?';
    result.appendChild(playAgain);

    window.addEventListener('click', function (e) {
        if (e.target.className === 'playAgain') {
             i=0;
             j=0;
             winner.textContent = '';
             result.textContent = '';
             playAgain.textContent = '';
        }; // if user does not click on button exit function
    });
    }
});

let i=0;
let j =0;
// Display the running score, and announce a winner of the game once one player reaches 5 points.
