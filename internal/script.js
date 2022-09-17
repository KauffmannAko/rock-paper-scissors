/*
 * store the three items in an array
 * output random number from 0 to 2
 * return a random item 
  
*/

 function getComputerChoice(){
    let randomItem = ['Rock','Paper','Scissors'];
    let i = Math.floor(Math.random()*(2 + 1));
    return randomItem[i];
 }
 
 
 /*
 * winning at a single round
 * 
 * 
  
*/
 function playRound(playerSelection,computerSelection){
    let win;
    if(playerSelection.toLowerCase()  === 'Rock'.toLowerCase() && computerSelection.toLowerCase() === 'Scissors'.toLowerCase())
    {
        win =`You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else if(playerSelection.toLowerCase()  === 'Scissors'.toLowerCase() && computerSelection.toLowerCase() === 'paper'.toLowerCase())
    {
        win =`You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else if(playerSelection.toLowerCase()  === 'paper'.toLowerCase() && computerSelection.toLowerCase() === 'rock'.toLowerCase())
    {
        win =`You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else if(computerSelection.toLowerCase()  === 'rock'.toLowerCase() && playerSelection.toLowerCase() === 'scissors'.toLowerCase())
    {
        win =`You lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if(computerSelection.toLowerCase()  === 'Scissors'.toLowerCase() && playerSelection.toLowerCase() === 'paper'.toLowerCase())
    {
        win =`You lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if(computerSelection.toLowerCase()  === 'paper'.toLowerCase() && playerSelection.toLowerCase() === 'rock'.toLowerCase())
    {
        win =`You lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if(computerSelection.toLowerCase() === playerSelection.toLowerCase())
    {
        win =`Draw! ${computerSelection} = ${playerSelection}`;
    }

    return win;

 }

 let player  = getComputerChoice();
 let computer = getComputerChoice();
