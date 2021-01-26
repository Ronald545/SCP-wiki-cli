function rng() {
    let randomNumber = Math.floor(Math.random() * 100).toString()
    let resultNumber = ""
    let doubleZeros = "00"
    let oneZero = "0"

    randomNumber.length === 1 ? resultNumber = doubleZeros.concat(randomNumber) : resultNumber = oneZero.concat(randomNumber)

    return resultNumber
}


module.exports = rng;