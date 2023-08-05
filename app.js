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

    function getResult(){
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
        return result;
    }

    let firstTool = true;
    const rock = document.querySelector('.rock');
    const paper = document.querySelector('.paper');
    const scissors = document.querySelector('.scissors');

    computerChoice = getComputerChoice();

    let promise =  new Promise((resolve) => {
        rock.addEventListener('click', () => {
            if (firstTool) {
                playerChoice = 'rock';
                firstTool = false; 
                const result = getResult();
                resolve(result);
            }
        });

        paper.addEventListener('click', () => {
            if (firstTool) {
                playerChoice = 'paper';
                firstTool = false;
                const result = getResult();
                resolve(result);
                }
        });
        scissors.addEventListener('click', () => {
            if (firstTool) {
                playerChoice = 'scissors';
                firstTool = false;
                const result = getResult();
                resolve(result);
                }
        });
    });
    return promise;
}


let playerScore = 0;
let computerScore = 0;
let firstInsertion = true;
const info = document.createElement('p');
info.style.fontSize = '24px';
info.style.display = 'flex';
info.style.justifyContent = 'center';

function game(){
    const playerLives = document.querySelectorAll('.playerHearts');
    const computerHearts = document.querySelectorAll('.computerHearts');
    const maxWins = 5;
    const footer = document.querySelector('.footer');
    const content = document.querySelector('.content');

    function handleResult(result) {
        if (result === 'win') {
            playerScore += 1;
            console.log(`You won this round!`, playerScore, computerScore);
            info.textContent = 'You won this round!';
            info.style.color = 'green';
            if (firstInsertion) {
            content.insertBefore(info, footer);
            }
            firstInsertion = false;
        }
        else if (result === 'lose'){
            computerScore += 1;
            console.log(`You lost this round!`, playerScore, computerScore);
            info.textContent = 'You lost this round!';
            info.style.color = 'red';
            if (firstInsertion) {
                content.insertBefore(info, footer);
                }
            firstInsertion = false;
        }
        else {
            console.log(`It is a tie!`, playerScore, computerScore);
            info.textContent = 'It is a tie!';
            info.style.color = 'orange';
            if (firstInsertion) {
                content.insertBefore(info, footer);
                }
            firstInsertion = false;
        }
        if (playerScore == maxWins){
            console.log('You won the game!');
            resetGame();
        }
    
        else if (computerScore == maxWins){
            console.log('You lost the game!');
            resetGame();
        }
    }

    function resetGame() {
        playerScore = 0;
        computerScore = 0;
        console.log('Game reset');
    }

    playRound().then((result) => {
        handleResult(result);
        console.log(game());
    });
}

console.log(game()); 