const convertToAudio = require("../bin/functions/audio")
const fs = require('fs')
const path = require('path');

test("converts text to an audio file", () => {
    convertToAudio("test", "test")

    setTimeout(() => {
        let pathToAudioFile = path.join(__dirname, "..", "test.mp3")
        let fsResult = fs.existsSync(pathToAudioFile)
        expect(fsResult).toBe(true)
    }, 2000)
})
