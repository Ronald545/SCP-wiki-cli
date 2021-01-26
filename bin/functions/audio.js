const gtts = require('gtts')
const ora = require('ora')

function convertToAudio(text, title) {
    let spinner = ora("recording audio file").start()
    const speaker = new gtts(text, 'en')

    return speaker.save(`${title}.mp3`, (err, result) => {
        err ? console.error(err) : spinner.stop()
    })
}

module.exports = convertToAudio