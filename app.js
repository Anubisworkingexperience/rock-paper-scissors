function getComputerChoice(){
    let value = Math.floor((Math.random() * 3));
    if (value === 0) {
        return 'rock';
    }
    else if (value === 1) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}


function playRound(playerChoice, computerChoice){
    playerChoice = prompt('Choose "Rock", "Paper" or "Scissors"').toLowerCase();
    computerChoice = getComputerChoice();
    let playerScore = 0;
    let computerScore = 0;

    let result;

    if ((playerChoice === 'rock' && computerChoice === 'scissors')
    || (playerChoice === 'paper' && computerChoice === 'rock')
    || (playerChoice === 'scissors' && computerChoice === 'paper')){
        result = `You win! ${playerChoice} beats ${computerChoice}`;
        playerScore += 1;
    }
    else if (playerChoice === computerChoice) {
        result = `It's a tie! You had ${playerChoice} and computer had ${computerChoice}`;
    }
    else {
        result = result = `You lose! ${computerChoice} beats ${playerChoice}`;
        computerScore += 1;
    }

    let score = playerScore > computerScore;

    return score;
}

function scoreHandler(playerScore, computerScore){

}


function game(score){
    score = playRound();
    
    for (i = 1; i <= 5; i++){
        console.log(playRound());
    }
}

console.log(game());