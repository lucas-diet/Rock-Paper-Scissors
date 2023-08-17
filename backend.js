function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];

    const choice = Math.floor(Math.random() * 3);
    return choices[choice];
}



function playRound(playerSelection, computerSelection) {
    const r = 'rock';
    const p = 'paper';
    const s = 'scissors';

    if (playerSelection === computerSelection) {
        return 'Tie';
    }
    else if (
        (playerSelection === s && computerSelection === p) ||
        (playerSelection === r && computerSelection === s) ||
        (playerSelection === p && computerSelection === r)
    ) {
        return 'Win'
    }
    else {
        return 'Lose'
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

let score_player = 0;
let score_computer = 0;

function game() {
    for (let round = 0; round < 9; round++) {
        const playerSelection = prompt().toLowerCase;
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
            
        console.log('---------------------------------'); 
        console.log("Player wählt: " + playerSelection);
        console.log("Computer wählt: " + computerSelection);
            
        if (result === 'Win') {
                score_player++
        }
        else if (result === 'Lose') {
                score_computer++;
        }
            
        if (result == 'Tie') {
                round--;
        }

        console.log('Your Score: ' + score_player);
        console.log('Computer Score: ' + score_computer);
        if (score_player === 5) {
            console.log('Player Win');
                    
        }
        else if (score_computer === 5) {
            console.log('Computer Win');
    
        }
    }
}
game();