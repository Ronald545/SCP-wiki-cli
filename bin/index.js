#!/usr/bin/env node
const inquirer = require('inquirer')
const rng = require('./functions/rng')
const scrape = require('./functions/scrape')
const { initialPrompt, enterCodePrompt, rngPrompt } = require('./prompts')

inquirer.prompt([initialPrompt])
  .then(answers => {
    if (answers.choice === 'Enter An SCP Code') {
      inquirer.prompt(enterCodePrompt)
        .then(answers => {
          scrape(answers.code, answers.output)
        })
    }
    if (answers.choice === "I'm Feeling Lucky Today") {
      inquirer.prompt([rngPrompt])
        .then(answers => {
          const randomNumber = rng()
          scrape(randomNumber, answers.output)
        })
    }
  })
