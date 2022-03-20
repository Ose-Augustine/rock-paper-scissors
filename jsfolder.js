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
const firstButton=document.createElement("div");
const secondButton=document.createElement("div");
const thirdButton=document.createElement("div");

const buttons=document.querySelectorAll('button');
let list=['rock','paper','scissors'];
let buttonResults=[firstButton,secondButton,thirdButton];
buttons.forEach((button)=>{
    i=0;
    while(i < list.length){
        let selection=list[i];
        let buttonSelection=buttonResults[i];
        button.addEventListener('click',function(){
            buttonSelection.textContent=playRound(selection);
        },false);
        i++;
    };
});
div.append(firstButton,secondButton,thirdButton);


// function game(){
//     for(i=0;i < 5;i++){
//         let playerSelection=prompt("Your turn,", "");
//         let round=playRound(playerSelection);
//         console.log(round);
//     }
// }