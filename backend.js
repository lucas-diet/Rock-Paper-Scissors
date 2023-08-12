function getComputerChoice() {
    let r = 'rock';
    let p = 'paper';
    let s = 'scissors';

    choices = [r,p,s];

    choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

let score_player = 0;
let score_computer = 0;

function playRound(playerSelection, computerSelection) {
    let r = 'rock';
    let p = 'paper';
    let s = 'scissors';

    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == r) {
        if (computerSelection == r) { 
            return 'Tie';
        }
        else if (computerSelection == p) {
            score_computer++;
            return 'Lose';
        }
        else if (computerSelection == s) {
            score_player++;
            return 'Win';
        }
    }
    else if (playerSelection == p) {
        if (computerSelection == r) {
            score_player++;
            return 'Win';
        }
        else if (computerSelection == p) {
            return 'Tie';
        }
        else if (computerSelection == s) {
            score_computer++;
            return 'Lose';
        }
    }
    else if (playerSelection == s) {
        if (computerSelection == r) {
            score_computer++;
            return 'Lose';
        }
        else if (computerSelection == p) {
            score_player++;
            return 'Win';
        }
        else if (computerSelection == s) {
            return 'Tie';
        }
    }
}

function game(playerSelection) {
    for (let i = 0; i < 9; i++) {
        let computerSelection = getComputerChoice();
         winner = playRound(playerSelection, computerSelection);
        
        if (playerSelection == computerSelection) {
            i--;
        }
        if (score_player == 5 ^ score_computer == 5) {
            console.log('Your Score: ' + score_player);
            console.log('Computer Score: ' + score_computer);
            console.log(winner);
            break;
        }
    }    
}
game(getComputerChoice());