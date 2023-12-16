function usdcny(usd) {

    let cny = usd * 6.75

    return `${cny.toFixed(2)} Chinese Yuan`

}

console.log(usdcny(10))


// parameters: usd    // an integer
// return: cny    // a string stating the amount of CNY to 2 decimal places, followed up Chinese Yuan'
// e.g. usdcny(10)
// results in '67.50 Chinese Yuan'

// declare a variable cny and assign it to usd * 6.75
// return cny to 2 decimal places plus ' Chinese Yuan' all concatenated into a string
