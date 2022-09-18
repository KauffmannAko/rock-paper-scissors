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

 
 /*
  *  Play five rounds
  * 
  * 
  *
  */
 function game(){
    let playerScore = 0;
    let ComputerScore = 0;
    for( let i = 0; i < 5; i++)
    {
        let player  = getComputerChoice();
        let computer = getComputerChoice();
        let play = playRound(player,computer);
        if(player.toLowerCase()  === 'Rock'.toLowerCase() && computer.toLowerCase() === 'Scissors'.toLowerCase())
        {
            playerScore = playerScore + 1;
        }
        else if(player.toLowerCase()  === 'Scissors'.toLowerCase() && computer.toLowerCase() === 'paper'.toLowerCase())
        {
        playerScore = playerScore + 1;
        }
        else if(player.toLowerCase()  === 'paper'.toLowerCase() && computer.toLowerCase() === 'rock'.toLowerCase())
        {
            playerScore = playerScore + 1;
        }

        else if(computer.toLowerCase()  === 'rock'.toLowerCase() && player.toLowerCase() === 'scissors'.toLowerCase())
        {
            ComputerScore = ComputerScore + 1;
        }
        else if(computer.toLowerCase()  === 'Scissors'.toLowerCase() && player.toLowerCase() === 'paper'.toLowerCase())
        {
            ComputerScore = ComputerScore + 1;
        }
        else if(computer.toLowerCase()  === 'paper'.toLowerCase() && computer.toLowerCase() === 'rock'.toLowerCase())
        {
            ComputerScore = ComputerScore + 1;
        }

    }
    //console.log(ComputerScore + playerScore);
    if( playerScore > ComputerScore)
    {
        console.log(`player won computer by ${playerScore} to ${ComputerScore}`);
    }
    else if( playerScore < ComputerScore)
    {
        console.log(`Computer won player  by ${ComputerScore} to ${playerScore}`);
    }
    else if ( playerScore === ComputerScore){
        console.log(`Draw ! Computer : ${ComputerScore} Player : ${playerScore}`);
    }    
 }
game()