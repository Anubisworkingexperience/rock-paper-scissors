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

    let result;

    if (playerChoice === 'rock' || playerChoice === 'paper' ||
     playerChoice === 'scissors'){

    if ((playerChoice === 'rock' && computerChoice === 'scissors')
    || (playerChoice === 'paper' && computerChoice === 'rock')
    || (playerChoice === 'scissors' && computerChoice === 'paper')){
        result = 'win';
    }
    else if (playerChoice === computerChoice) {
        result = 'tie';
    }
    else {
        result = 'lose';
    }
    }
    else {
        console.log('Please enter a valid value');
        playRound();
    }

    return result;
}


function game(){
    let playerScore = 0;
    let computerScore = 0;
    let result;

    for (i = 1; i <= 5; i++){
        result = playRound();
        

        if (result === 'win') {
            playerScore += 1;
            console.log(`${i}. You won this round!`);
        }
        else if (result === 'lose'){
            computerScore += 1;
            console.log(`${i}. You lost this round!`);
        }
        else {
            console.log(`${i}. It is a tie!`);
        }
        if (i == 5){
            if (playerScore > computerScore) {
                console.log('You won the game!');
            }
             // equal score
            else if (playerScore === computerScore){
                let randomDecider = Math.floor((Math.random() * 2));
                if (randomDecider === 0) {
                    console.log('You won the game!');
                }
                else {
                    console.log('You lost the game!');
                }
            }
            //
            else {
                console.log('You lost the game!');
            }
        }
    }
    return 'Thanks for playing!';
}

console.log(game());