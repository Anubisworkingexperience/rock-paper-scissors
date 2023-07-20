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
    //console.log(result);

    return result;
}


function game(){
    let playerScore = 0;
    let computerScore = 0;
    let result;

    for (i = 1; i < 5; i++){
        result = playRound();
        console.log(result);

        if (result === 'win') {
            playerScore += 1;
            console.log('You won this round!');
        }
        else if (result === 'lose'){
            computerScore += 1;
            console.log('You lost this round!');
        }
        else {
            console.log('It is a tie!');
        }
        if (i != 5){
            playRound();
        }
        else {
            if (playerScore > computerScore) {
                console.log('You won the game!');
            }
             // 5 ties in a row
            else if (playerScore === computerScore){
                while (result != 'win' || result != 'lose') {
                    playRound();
                }
                if (result === 'win') {
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
}

console.log(game());