/*
 * store the three itemss in an array
 * output random number from 0 to 2
 * return a random item 
  
*/

 function getComputerChoice(){
    let randomItem = ['rock','paper','scissors'];
    let i = Math.floor(Math.random()*(2 + 1));
    return randomItem[i];
 }