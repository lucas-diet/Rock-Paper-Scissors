
function getComputerChoice() {
    let possChoices = ['rock', 'paper', 'scissors'];
    let choice = Math.floor(Math.random()*3);
    return possChoices[choice];
}

function playRound(playerSelection, computerSelection) {
    let result = '';
    if (playerSelection == 'rock') {
        if (computerSelection == 'rock') {
            result = 'Draw'
        }
        else if (computerSelection == 'paper') {
            result = 'You Lose! Paper beats Rock'
        }
        else if (computerSelection == 'scissors') {
            result = 'You Win! Rock beats Scissors'
        }
    }
    if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            result = 'You Win! Paper beats Rock'
        }
        else if (computerSelection == 'paper') {
            result = 'Draw'
        }
        else if (computerSelection == 'scissors') {
            result = 'You Lose! Scissors beats Paper'
        }
    }
    if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            result = 'You Lose! Rock beats Scissors'
        }
        else if (computerSelection == 'paper') {
            result = 'You Win! Scissors beats Paper'
        }
        else if (computerSelection == 'scissors') {
            result = 'Draw'
        }
    }
    return result;
}
const playerSelection = 'paper';
console.log('Player: ',playerSelection);
const computerSelection = getComputerChoice();
console.log('Computer: ',computerSelection);
console.log(playRound(playerSelection, computerSelection));

function game() {
    
}