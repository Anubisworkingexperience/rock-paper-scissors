// this is just a testing file which is used to test things and not the
//project itself

const playerLives = document.querySelectorAll('.playerHeart');
const computerLives = document.querySelectorAll('.computerHeart');
const playerLivesContainer = document.querySelector('.playerHearts');
const computerLivesContainer = document.querySelector('.computerHearts');


console.log(playerLives.length);
playerLivesContainer.removeChild(playerLives[playerLives.length - 1]);

/*TODO
    1. Lives removing depending on score
    2. Winning and losing overlay
    3. Computer text box when losing or winning or tieing rounds
*/


