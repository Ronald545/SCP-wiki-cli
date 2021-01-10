#!/usr/bin/env node

const axios = require('axios');
const {JSDOM} = require('jsdom')
const fs = require('fs');
const chalk = require('chalk');
const inquirer = require('inquirer');

async function scrape(CODE, output){
    let data = await axios.get(`http://www.scpwiki.com/scp-${CODE}`);

   const dom = new JSDOM(data.data);

   const { document } = dom.window;

   let title = `${document.querySelector('#page-title').textContent.trim()}` ;
   let bodyRaw = Array.from(document.querySelector("#page-content").children);
   let body = "";
   for (let i = 2; i < bodyRaw.length - 2; i++) { 
       body.replace(/(\+|\-) show block/, "");
        body += bodyRaw[i].textContent;
        body += "\n";
   }

   let result = title + "\n" + body;

   if(!output) {
       console.log(chalk.bgBlack.yellow.underline.bold(title));
       console.log(chalk.bold(body));
   }
   if(output) {
       fs.writeFileSync(`${title}.txt`, result);
   } 
}



inquirer.prompt([ { 
    name: "choice",
    type: "list",
    message:"SCP Wiki CLI is here to serve you",
    choices: ["Enter An SCP Code", "I'm Feeling Lucky Today"]
}])
.then(answers => {
    if (answers.choice === "Enter An SCP Code") {
        inquirer.prompt([ 
            {
                name: "code",
                type: "number",
                message: "Kindly Enter the number"
            },
            {
                name: "write",
                type: "confirm",
                message: "Do you want the story to be outputted in a text file ?"
            }
        ])
        .then(answers => {
            scrape(answers.code, answers.write);
        });
    }

    if (answers.choice === "I'm Feeling Lucky Today") {
        inquirer.prompt([ 
            {
                name: "write",
                type: "confirm",
                message: "Do you want the story to be outputted in a text file ?"
            }
        ])
        .then(answers => {
            let randomNumber = Math.floor(Math.random() * 100).toString();
            let resultNumber = "";
            let doubleZeros = "00";
            let oneZero = "0";
            if(randomNumber.length === 1) {
                resultNumber = doubleZeros.concat(randomNumber);
            }
            if(randomNumber.length === 2) {
                resultNumber = oneZero.concat(randomNumber);
            }
            
            scrape(resultNumber, answers.write);
        })
    }
})