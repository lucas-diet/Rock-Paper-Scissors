function getComputerChoice() {
    choices = ['rock', 'paper', 'scissors'];

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

function playerChoice() {
    let choice = '';
    window.addEventListener('load', function() {
        if (document.getElementById('s-btn')) {
            document.getElementById('s-btn').addEventListener('click', choose_scissors);
        }
    });

    function choose_scissors() {
        console.log('scissors');
        choice = 'scissors';
    }

    window.addEventListener('load', function() {
        if (document.getElementById('r-btn')) {
            document.getElementById('r-btn').addEventListener('click', choose_rock);
        }
    });

    function choose_rock() {
        console.log('rock');
        choice = 'rock';
    }

    window.addEventListener('load', function() {
        if (document.getElementById('p-btn')) {
            document.getElementById('p-btn').addEventListener('click', choose_paper);
        }
    });

    function choose_paper() {
        console.log('paper');
        choice = 'paper';
    }
    return choice;
}

function game() {
    let playerSelection = playerChoice();
    let computerSelection = getComputerChoice();

    console.log('Player: ', playerSelection);
    console.log('Computer: ', computerSelection);

    playRound(playerSelection,computerSelection);

    console.log('Your Score: ' + score_player);
    console.log('Computer Score: ' + score_computer);
    
    //if (score_player == 5 ^ score_computer == 5) {
      //  console.log('Your Score: ' + score_player);
        //console.log('Computer Score: ' + score_computer);
        //console.log(winner);
    //}    
}

game();