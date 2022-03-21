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
function automation(){
    let list=['rock','paper','scissors'];
    for(char of list){
        for (let i=0;i < 5;i++){
            playRound(char);
        }
    }
}
const div=document.querySelector("div");
const rock=document.createElement("div");
const paper=document.createElement("div");
const scissors=document.createElement("div");

const buttons=document.querySelectorAll('button');
let list=['rock','paper','scissors'];
// let buttonResults=[firstButton,secondButton,thirdButton];

const btn0=document.querySelector("#first");
btn0.addEventListener('click',function(){
    rock.textContent=(playRound('rock'));
})
const btn1=document.querySelector("#second");
btn1.addEventListener('click',function(){
    paper.textContent=(playRound('paper'));
})
const btn2=document.querySelector("#third");
btn2.addEventListener('click',function(){
    scissors.textContent=(playRound('scissors'));
})

  div.append(rock,paper,scissors);

