const axios = require('axios')
const { JSDOM } = require('jsdom')
const fs = require('fs')
const chalk = require('chalk')
const convertToAudio = require('./audio')

async function scrape(CODE, output) {
    await axios.get(`http://www.scpwiki.com/scp-${CODE}`)
        .then(response => {
            let data = response
            const dom = new JSDOM(data.data)

            const { document } = dom.window

            let title = `${document.querySelector('#page-title').textContent.trim()}`
            let bodyRaw = Array.from(document.querySelector("#page-content").children)
            let body = "";
            for (let i = 2; i < bodyRaw.length - 2; i++) {
                body.replace(/(\+|\-) show block/, "")
                body += bodyRaw[i].textContent
                body += "\n"
            }

            let result = title + "\n" + body

            if (output === "printed out") {
                console.log(chalk.bgBlack.yellow.underline.bold(title))
                console.log(chalk.bold(body))
            }
            if (output === "text file") {
                fs.writeFileSync(`${title}.txt`, result)
            }
            if (output === "audio file") {
                convertToAudio(result, title)
            }
        })
        .catch(e => {
            return console.log(chalk.red("SCP not found"))
        })
}

module.exports = scrape;