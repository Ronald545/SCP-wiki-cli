const promptMessages = {
  initialPrompt: {
    name: 'choice',
    type: 'list',
    message: 'SCP Wiki CLI is here to serve you',
    choices: ['Enter An SCP Code', "I'm Feeling Lucky Today"]
  },
  enterCodePrompt: [
    {
      name: 'code',
      type: 'text',
      message: 'Kindly Enter the number'
    },
    {
      name: 'output',
      type: 'list',
      message: 'How do you want your SCP outputted ?',
      choices: ['printed out', 'text file', 'audio file']
    }
  ],
  rngPrompt: {
    name: 'output',
    type: 'list',
    message: 'How do you want your SCP outputted ?',
    choices: ['printed out', 'text file', 'audio file']
  }
}

module.exports = promptMessages
