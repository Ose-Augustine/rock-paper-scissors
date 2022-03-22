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

const div=document.querySelector("div");
const rock=document.createElement("div");
const paper=document.createElement("div");
const scissors=document.createElement("div");
const list=['rock','paper','scissors'];
const buttonIds=['#first','#second','#third'];

 let buttonResults=[rock,paper,scissors];
for(let i=0;i < 3;i++){
    const buttons=document.querySelector(buttonIds[i]);
    const playerChoice=list[i];
    const buttonDiv=buttonResults[i];
    buttons.addEventListener('click',function(){
        buttonDiv.textContent=playRound(playerChoice);
    })
}

 div.append(rock,paper,scissors);

