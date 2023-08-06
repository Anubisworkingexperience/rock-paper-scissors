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
    const playerLives = document.querySelectorAll('.playerHeart');
    const computerLives = document.querySelectorAll('.computerHeart');
    const playerLivesContainer = document.querySelector('.playerHearts');
    const computerLivesContainer = document.querySelector('.computerHearts');
    const maxWins = 5;
    const footer = document.querySelector('.footer');
    const content = document.querySelector('.content');
    const robotMessage = document.createElement('span');

    //message from robot which appears when losing or winning
    robotMessage.style.color = 'black';
    robotMessage.style.fontSize = '24px';
    robotMessage.style.border = '4px solid black';
    robotMessage.style.padding = '10px';
    robotMessage.style.width = '300px';

    function handleResult(result) {
        if (result === 'win') {
            //removing computer lives after win
            computerLivesContainer.removeChild(computerLives[computerLives.length - 1]);

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
            //removing player lives after lose
            playerLivesContainer.removeChild(playerLives[playerLives.length - 1]);

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
        const resultText = document.createElement('span');
        const modalContent = document.querySelector('.modalContent');
        
        
        resultText.style.fontSize = '40px';
        resultText.style.display = 'flex';
        resultText.style.justifyContent = 'center';

        if (playerScore == maxWins){
            console.log('You won the game!');
            resultText.textContent = 'You won!';
            resultText.style.color = 'green';
            robotMessage.textContent = "You managed to win me... It's really impressive! Let's play again! I won't go easy now!";
            modalContent.appendChild(resultText);
            resetGame();
            
        }
    
        else if (computerScore == maxWins){
            console.log('You lost the game!');
            resultText.textContent = 'You lost!';
            resultText.style.color = 'red';
            robotMessage.textContent = "Ha! Did you really think you'd win? I never lose! We can play again but I don't think you have any chances";
            modalContent.appendChild(resultText);
            resetGame();
        }
    }

    function resetGame() {
        const modal = document.querySelector('.modal');
        const modalContent = document.querySelector('.modalContent');
        const robotImage = document.createElement('img');
        const retry = document.createElement('a');
        const retryContainer = document.createElement('div');

        robotImage.src = './images/ai.png';
        retry.textContent = 'Play again';
        robotImage.style.width = '150px';
        robotImage.style.height = '150px';

        modalContent.appendChild(robotImage);
        modalContent.appendChild(retryContainer);

        modalContent.style.display = 'flex';
        modalContent.style.flexDirection = 'column';
        modal.style.display = 'block';

        modalContent.insertBefore(robotMessage, retryContainer);

        retry.style.display = 'flex';
        retry.style.justifyContent = 'center';
        retry.style.alignItems = 'center';
        retry.style.width = '100px';
        retry.style.borderRadius = '10px'; 
        retry.href = './index.html';
        retry.style.padding = '10px';
        retry.style.color = 'purple';
        retry.style.border = '2px solid black';

        retryContainer.style.display = 'flex';
        retryContainer.style.justifyContent = 'center';
        retryContainer.appendChild(retry);

        console.log('Game reset');
    }

    playRound().then((result) => {
        handleResult(result);
        console.log(game());
    });
}

console.log(game()); 