const startGameBtn = document.getElementById('start-game-btn');
const ROCK = 'ROCK';
const SCISSORS ='SCISSORS';
const PAPER = 'PAPER';

const getPlayerChoice = function(){
    const selection = prompt('Rock , Paper or Scissors?'.toUpperCase())
    if( selection!==ROCK &&
         selection!==PAPER&&
          selection!==SCISSORS ){
        alert('invalid choice! We chose Rock for you!')
    }
}
startGameBtn.addEventListener('click' , function(){
    console.log('Game is starting...');
});