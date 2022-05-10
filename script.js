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



function playRound(computerSelection, playerSelection){     //Playing a single round according to the rules of the game
    if(computerSelection === playerSelection){      
        
        return {message: ('Its a Tie.'), winCount:winCount, loseCount:loseCount } ;  //return tie if the selection are equal
    }
    else if((computerSelection === 'rock' && playerSelection === 'scissor') || (computerSelection === 'scissor' && playerSelection === 'paper')
    || (computerSelection === 'paper' && playerSelection === 'rock')){
        
        loseCount += 1; //Update the  lose counter
        return {message:(`You lose. ${computerSelection} beats ${playerSelection}`),
        loseCount: loseCount, winCount:winCount};
    }
        else{
            winCount += 1; //Update the win counter
            return {message:(`You Win. ${playerSelection} beats ${computerSelection}`),
            winCount: winCount, loseCount:loseCount};
        }
    }
function displayResult(result){  //displaying result to the user
    const msg = document.querySelector('#win-message'); //selecting p element to announce winner of the round
    const human = document.querySelector('#human'); //Selecting the human score
    const machine = document.querySelector('#computer'); //selecting the machine score 
    msg.textContent = result.message;
    human.textContent = 'Man: '+result.winCount;
    machine.textContent = 'Machine: ' + result.loseCount;
}
function check(e){
    e.preventDefault();   //Prevents bubbling on the way down
    let game = playRound(computerPlay(),e.currentTarget.value); //getting result from the game played
    displayResult(game);
    const container = document.querySelector('#container');
    const result = document.querySelector('#result');
    if(winCount === 5){
        const winner = document.createTextNode('Congratualtions!! You have succeded in defeating Machine');
        result.appendChild(winner); 
        playAgain('Wanna Play again ?');
    }
    else if(loseCount === 5){
        const looser = document.createTextNode("You have failed. There's no running from what comes");
        result.appendChild(looser);
        playAgain('Try again ?');
    }

}
function playAgain(prompt_text){
        const modal = document.querySelector('.modal');
        const text = document.querySelector('.prompt')
        const btn = document.querySelector('#modal-btn');
        text.textContent = prompt_text;
        modal.style.display = 'block';

        btn.onclick = function(){
            window.location.reload();
            
        }
}
    let winCount = 0; //initialize the win counter
    let loseCount = 0; //initialize the lose counter 
    const choices = document.querySelectorAll('button'); //Select all the buttons
    choices.forEach(btn =>
        btn.addEventListener('click', check,{  //Add event listener to each button
            capture: true
    }));
