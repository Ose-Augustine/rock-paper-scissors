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
const buttonElement=document.querySelectorAll('button');
const results=document.querySelectorAll('#results')

let buttonResults=[rock,paper,scissors];
//to play a round and display game status i.e win, lose or draw.
let winCounter=0;
let loseCounter=0;
for(let i=0;i < 3;i++){
    const buttons=document.querySelector(buttonIds[i]);//for each button in the buttonIds
    const playerChoice=list[i];//selects from the list at index i
    const buttonDiv=buttonResults[i];
    buttons.addEventListener('click',function(){
        buttonDiv.textContent=playRound(playerChoice);
        if (buttonDiv.textContent.includes('win')){
            winCounter += 1;
        }else if(buttonDiv.textContent.includes('lose')){
            loseCounter +=1;
        }
    })//function() for functions that have parameters to fire in event listener

    

}//buttonDiv is what is defining i(used in the loop) as the debugger show

div.append(rock,paper,scissors);

//to display the running score and winner at the end of five rounds
let count=0;
buttonElement.forEach((button)=>{
    button.addEventListener('click',function(){
        if (winCounter==5 || loseCounter==5){
            alert (`player Score ${winCounter}
        Computer Score${loseCounter}`);  

        }
    });
})

