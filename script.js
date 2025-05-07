let humanScore=0;
let computerScore=0;
   
function playGame(){  //Main game function
    
    for(i=0;i<5;i++){ //Game loop
        let humanSelection = getHumanChoice(); //Get input
        let computerSelection = getComputerChoice(); //Generate computer choice
         playRound(humanSelection, computerSelection); 
    }
    //Determine the winner after all rounds
    if(humanScore>computerScore){
        console.log("You win the game");
    }
    else if(humanScore==computerScore){
        console.log("It's a draw");
    }
    else{
        console.log("You lose the game");
    }
   

}
//Generate computer choice
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

function getHumanChoice(){
    return prompt("Enter your choice");
}

//Play a single round
function playRound(humanChoice,computerChoice){
    humanChoice=humanChoice.toLowerCase();
    computerChoice=computerChoice.toLowerCase();
    console.log("Your choice: %s\nComputer's choice: %s",humanChoice,computerChoice);
    if(humanChoice===computerChoice){
        console.log("Draw");
    }
    else if((humanChoice=="rock" && computerChoice=="scissors")||(humanChoice=="paper" && computerChoice=="rock")||(humanChoice=="scissors" && computerChoice=="paper")){
        console.log("You win the round");
        humanScore=humanScore+1;
    }
    else{
        console.log("Computer wins the round");
        computerScore=computerScore+1;
    }
    console.log("Your score: %d \nComputer score:%d\n\n",humanScore,computerScore);
}
//Start the game
playGame();