window.addEventListener('click', function (e) { // starts game once user clicks button
    if (e.target.id === '') return; // if user does not click on button exit function

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
       while (i<=5) { 
        if ((playerSelection === 'Rock' && computerSelection ==='Scissors') || (playerSelection === 'Paper' && computerSelection === 'Rock') || 
        (playerSelection === 'Scissors' && computerSelection === 'Paper')) {
        i++;
        return `You win ${playerSelection} beats ${computerSelection}` 
        }

        while (j<=5) {
        if ((playerSelection === 'Rock' && computerSelection ==='Paper') || (playerSelection === 'Paper' && computerSelection === 'Scissors') || 
        (playerSelection === 'Scissors' && computerSelection === 'Rock')) {
        j++;
            return `You lose ${computerSelection} beats ${playerSelection}` 
        }
    }
        while (j<=5 && i<=5) {
        } if (playerSelection === computerSelection) {
        return 'Tie Game!'
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
    // console.log(result);
    // console.log(playRound(playerSelection, computerSelection)); // logs winner of round using const variables of user and PC

});

let i=0;
let j =0;
// Display the running score, and announce a winner of the game once one player reaches 5 points.
