function computerPlay(){
    let possibleReturns=['Rock','Paper','Scissors'];
    //generate a random element from the list
    const random=Math.floor(Math.random()*possibleReturns.length);
    return (random,possibleReturns[random]);
}
function playRound(playerSelection,computerSelection=computerPlay()){
    const player=playerSelection.toLowerCase();
    const computer=computerSelection.toLowerCase();
    if (player=='rock'&& computer=='paper'){
        return `You Lose ${computerSelection} beats ${playerSelection}`
    }else if(player=='paper'&& computer=='rock'){
        return `You win ${playerSelection} beats ${computerSelection}`;
    }else if (player=='scissors' && computer=='rock'){
        return `You lose ${computerSelection} beats ${playerSelection}`;
    }else if (player=='rock' && computer=='scissors'){
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }else if (player=='paper' && computer=='scissors'){
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }else if (player=='scissors'&& computer=='paper'){
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }else{
        return "Draw"
    }
    
}
function game(){

}