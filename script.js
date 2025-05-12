let humanScore=0;
let computerScore=0;
const rockButton=document.createElement("button");
const paperButton=document.createElement("button");
const scissorsButton=document.createElement("button");
const outputText=document.createElement("div");
rockButton.textContent="ROCK";
rockButton.id="rock";
paperButton.textContent="PAPER";
paperButton.id="paper";
scissorsButton.textContent="SCISSORS";
scissorsButton.id="scissors";
const bodyElement=document.querySelector("body");
bodyElement.appendChild(rockButton);
bodyElement.appendChild(paperButton);
bodyElement.appendChild(scissorsButton);
rockButton.addEventListener("click",eventHandler);
paperButton.addEventListener("click",eventHandler);
scissorsButton.addEventListener("click",eventHandler);
bodyElement.appendChild(outputText);


function getComputerChoice(){
    let value=Math.floor(Math.random()*3);
    let str="";
    switch(value) {
        case 0: 
            str="rock"; 
            break;
        case 1: 
            str="paper";
            break;
        default: 
            str="scissors"
    }
    return str;
}


//Play a single round
function playRound(humanChoice,computerChoice){
    humanChoice=humanChoice.toLowerCase();
    computerChoice=computerChoice.toLowerCase();
    outputText.textContent="Your choice: "+humanChoice+"\nComputer's choice: "+computerChoice;
    if(humanChoice===computerChoice){
        outputText.textContent+="\nResult: Draw";
    }
    else if((humanChoice=="rock" && computerChoice=="scissors")||(humanChoice=="paper" && computerChoice=="rock")||(humanChoice=="scissors" && computerChoice=="paper")){
        outputText.textContent+="\nResult: You win";
        humanScore=humanScore+1;
    }
    else{
       outputText.textContent+="\nResult: You lose";
        computerScore=computerScore+1;
    }
    outputText.textContent+="\nYour score: "+humanScore+"\nComputer score:"+computerScore+"\n";
    if(humanScore>4||computerScore>4){
        humanScore>4 ? outputText.textContent+="You win the game. Click any button to restart." : outputText.textContent+="Computer wins the game. Click any button to restart.";
        humanScore=0;
        computerScore=0;
    }
}

function eventHandler(e){
    switch(e.target.textContent){
        case "ROCK":
            playRound("rock",getComputerChoice());
            break;
        case "PAPER":
            playRound("paper",getComputerChoice());
            break;
        default:
            playRound("scissors",getComputerChoice());
            break;
    }
}
