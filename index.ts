#! /usr/bin/env node

import inquirer from "inquirer";
// 1) Compare will generated a random number - Done.
// 2) User input for guessing number
// 3) Compare user input with computer generated number and show result
const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log("Wellcom to number guessing game");

const answer = await inquirer.prompt([
  {
       name: "userGuessedNumber",
       type: "number",
       message: "Please guess a number betweem 1-6: ",
 },
]);
if (answer.userGuessedNumber === randomNumber) {
  console.log("Congratulation! you guessed right number.");
}
else {
  console.log("You guessed wrong number");
}
