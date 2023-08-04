// this is just a testing file which is used to test things and not the
//project itself

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

let firstTool = true;
let playerChoice = '';

console.info(rock.outerHTML);

if (playerChoice != 'rock') {
rock.addEventListener('click', () => {
    if (firstTool) {
    playerChoice = 'rock';
    firstTool = false;
    }
});
}

console.log(firstTool, playerChoice);