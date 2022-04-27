function computerPlay(){
    let randomNumber = Math.floor(Math.random()*3)+ 1; // Generate a random number between 1 and 3 
    let choice;
    switch (randomNumber){      //Setting the value of random choice i.e. 1 for rock, 2 for paper and 3 for scissor
        case 1:
            choice = 'rock';
            break;
        case 2: 
            choice = 'paper';
            break;
        case 3:
            choice = 'scissor';
            break;
    }
    return choice;
}
let computerSelection; //Variable to store the computer choice
let playerSelection; //Variable to store the player's choice
let winCount = 0; //initialize the win counter
let loseCount = 0; //initialize the lose counter 


function playRound(computerSelection, playerSelection){     //Playing a single round according to the rules of the game
        if(computerSelection === playerSelection){      

            return {message: ('Its a Tie.') } ;  //return tie if the selection are equal
        }
        else if((computerSelection === 'rock' && playerSelection === 'scissor') || (computerSelection === 'scissor' && playerSelection === 'paper')
        || (computerSelection === 'paper' && playerSelection === 'rock')){

            loseCount += 1; //Update the  lose counter
            return {message:(`You lose. ${computerSelection} beats ${playerSelection}`),
                    loseCount: loseCount};
        }
        else{
            winCount += 1; //Update the win counter
            return {message:(`You Win. ${playerSelection} beats ${computerSelection}`),
                    winCount: winCount};
        }
}
function getChoice (){
    let playerChoice = prompt('Choose your weapon of choice ?. Rock Paper or Scissor: '); //Get input from the user 
    playerChoice = playerChoice.toLowerCase();
    return playerChoice;
}

for(let i = 1; i<=5; i++){  //Loop the game for multiple rounds
    computerSelection = computerPlay();
    playerSelection = getChoice();
    let message = playRound(computerSelection, playerSelection).message; 
    console.log(message);  //display the result of a each round
    
}
if (winCount > loseCount){
    console.log('Congratulation. You have won'); // announce the winner of the game
}
else if (winCount < loseCount){
    console.log('Better Luck next time');
}
else {
    console.log('You are as lucky as the computer')
}

