function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];

    const choice = Math.floor(Math.random() * choices.length);
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

let score_player = 0;
let score_computer = 0;

function game(playerSelection) {
        const computerSelection = getComputerChoice();
        if (playerSelection === 'rock') {
            document.getElementById("r-btn").style.borderColor = 'red';
            document.getElementById("p-choice").innerHTML = playerSelection;
            document.getElementById("c-choice").innerHTML = computerSelection;

            if (document.getElementById("p-btn").style.borderColor === 'red' || 
                document.getElementById("s-btn").style.borderColor === 'red') {
                    document.getElementById("p-btn").style.borderColor = 'white';
                    document.getElementById("s-btn").style.borderColor = 'white';
                }
            
            g = playRound(playerSelection,computerSelection);
            
            if (g === 'Win') {
                score_player++;
                document.getElementById("score-play").innerHTML = score_player;
            }
            else if (g === 'Lose') {
                score_computer++;
                document.getElementById("score-comp").innerHTML = score_computer;
            }
        }
        else if (playerSelection === 'paper') {
            document.getElementById("p-btn").style.borderColor = 'red';
            document.getElementById("p-choice").innerHTML = playerSelection;
            document.getElementById("c-choice").innerHTML = computerSelection;

            if (document.getElementById("r-btn").style.borderColor === 'red' || 
                document.getElementById("s-btn").style.borderColor === 'red') {
                    document.getElementById("r-btn").style.borderColor = 'white';
                    document.getElementById("s-btn").style.borderColor = 'white';  
                }
            
            g = playRound(playerSelection,computerSelection);
            
            if (g === 'Win') {
                score_player++;
                document.getElementById("score-play").innerHTML = score_player;
            }
            else if (g === 'Lose') {
                score_computer++;
                document.getElementById("score-comp").innerHTML = score_computer;
            }
        }
        else if (playerSelection === 'scissors') {
            document.getElementById("s-btn").style.borderColor = 'red';
            document.getElementById("p-choice").innerHTML = playerSelection;
            document.getElementById("c-choice").innerHTML = computerSelection;

            if (document.getElementById("p-btn").style.borderColor === 'red' || 
                document.getElementById("r-btn").style.borderColor === 'red') {
                    document.getElementById("p-btn").style.borderColor = 'white';
                    document.getElementById("r-btn").style.borderColor = 'white';  
                }
            g = playRound(playerSelection,computerSelection);
        
            if (g === 'Win') {
                score_player++;
                document.getElementById("score-play").innerHTML = score_player;
            }
            else if (g === 'Lose') {
                score_computer++;
                document.getElementById("score-comp").innerHTML = score_computer;
            }

            playRound(playerSelection,computerSelection);
        }
        if (score_player === 5) {
            alert('Player Win');
            window.location.reload();
            score_computer = 0;
            score_player = 0;
        }
        else if (score_computer === 5) {
            alert('Computer Win');
            window.location.reload();
            score_computer = 0;
            score_player = 0;
        }
}