#! /usr/bin/env node

//creating number guessing game

import inquirer from "inquirer";
import chalk from "chalk";

async function startFunc (){
    
type ansType = {
    userGuess : number
}

const systemGeneratedNumber = Math.floor(Math.random() * 10);

let answer : ansType = await inquirer.prompt([
    {
        type : "number",
        name : "userGuess",
        message : "Kindly guess number between 1 to 10"
    }
])
const {userGuess} = answer
console.log(`You Guessed ${userGuess} and System generate ${systemGeneratedNumber}`);

if (userGuess===systemGeneratedNumber) {
    console.log(chalk.yellow.bold("Yeaaaaa your answer in correct \n ") + chalk.red.bold.bgYellow("YOU WIN!") + ".");
}else {
    console.log(chalk.red.bold(`Better Luck, Try Next Time`));
}}

async function startAgain () {
    do{
        await startFunc();
        var again = await inquirer.prompt([
            {
                type : "input",
                name : "restart",
                message : "Do you want to play again? Press Y or N"
            }
        ])
    }
    while (again.restart === "Y" || again.restart === "y" || again.restart === "yes" || again.restart === "YES" || again.restart === "Yes");
}
startAgain();