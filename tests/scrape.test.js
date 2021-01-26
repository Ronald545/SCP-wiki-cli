const scrape = require("../bin/functions/scrape");
const fs = require('fs')
const path = require('path')

test("writing a text file with SCPs", () => {
    scrape("001", "text file")

    setTimeout(() => {
        let pathToTextFile = path.join(__dirname, "..", "SCP-001.txt")
        let fileExists = fs.existsSync(pathToTextFile)
        let fileContent = fs.readFileSync(pathToTextFile)

        expect(fileExists).toBe(true)
        expect(fileContent).toBeDefined()
    }, 2000)

})