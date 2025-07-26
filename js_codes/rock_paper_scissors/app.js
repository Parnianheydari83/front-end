const startGameBtn = document.getElementById('start-game-btn');
const ROCK = 'ROCK';
const SCISSORS ='SCISSORS';
const PAPER = 'PAPER';
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let gameIsRunning = false;

const getPlayerChoice = function(){
    const selection = prompt(`${ROCK} , ${PAPER} or ${SCISSORS}`, '').toUpperCase()
    if( selection!==ROCK &&
        selection!==PAPER &&
        selection!==SCISSORS )
        {
        alert(`invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`)
        return;
    }
    return selection;
}
const getComputerChoice = () =>{
    const randomValue = Math.random();
    if (randomValue <0.34){
        return ROCK
    }else if (randomValue <0.67){
        return PAPER ;
    }else{
        return SCISSORS
    }
    

}

const getWinner = function(cChoice , pChoice =DEFAULT_USER_CHOICE){
    if(cChoice === pChoice){
        return 'DRAW';
    }else if (cChoice==ROCK && pChoice===PAPER ||
            cChoice===PAPER&& pChoice===SCISSORS ||
            cChoice=== SCISSORS&& pChoice=== ROCK)
        {
        return RESULT_PLAYER_WINS;
        }
    else {
        RESULT_COMPUTER_WINS;
    }    
}


startGameBtn.addEventListener('click' , () =>{
    if (gameIsRunning ){
        return;
    }
    gameIsRunning = true;
    console.log('Game is starting...');
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    let winner;
    if (playerChoice){
        winner = getWinner(computerChoice,playerChoice);
    }else{
        winner = getWinner(computerChoice)
    }
    let message = `You picked ${playerChoice ? playerChoice : DEFAULT_USER_CHOICE} and computer picked ${computerChoice} , therefor you`;
    if (winner === RESULT_DRAW){
        message += `had a draw.`
    }else if (winner === RESULT_PLAYER_WINS){
        message += `won.`
    }else{
        message+= `lost.`
    }
    alert(message);
    gameIsRunning = false;
}
);