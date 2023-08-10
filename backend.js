function getComputerChoice() {
    let r = 'rock';
    let p = 'paper';
    let s = 'scissors';

    choices = [r,p,s];

    choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

function playRound(playerSelection, computerSelection) {
    let r = 'rock';
    let p = 'paper';
    let s = 'scissors';

    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == r) {
        if (computerSelection == r) {
            return ['Draw','n'];
        }
        else if (computerSelection == p) {
            return ['Computer Win -> Paper beats Rock','c'];
        }
        else if (computerSelection == s) {
            return ['Player Win -> Rock beats Scissors','p'];
        }
    }
    else if (playerSelection == p) {
        if (computerSelection == r) {
            return ['Player Win -> Paper beats Rock','p'];
        }
        else if (computerSelection == p) {
            return ['Draw','n'];
        }
        else if (computerSelection == s) {
            return ['Computer Win -> Scissors beats Paper','c'];
        }
    }
    else if (playerSelection == s) {
        if (computerSelection == r) {
            return ['Computer Win -> Rock beats Scissors','c'];
        }
        else if (computerSelection == p) {
            return ['Player Win -> Scissors beats Paper','p'];
        }
        else if (computerSelection == s) {
            return ['Draw','n'];
        }
    }
}

function game(playerSelection, computerSelection) {
    let score_player = 0;
    let score_computer = 0;
    winner = playRound(playerSelection,computerSelection);
    if (winner[1] == 'p') {
        score_player++;
        return winner[0];
    }
    else if (winner[1] == 'c') {
        score_computer++;
        return winner[0];
    }
    else {
        return winner[0];
    }
}
p = 'Paper';
c = getComputerChoice();
console.log('Player: ', p.toLowerCase());
console.log('Computer: ', c);
console.log(game(p,c));