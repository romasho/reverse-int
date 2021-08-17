module.exports = function reverse (n) {
    let rev = String(Math.abs(n))
    let reversed = ''
    for (let i = 0; i < rev.length; i++)
        {reversed = rev[i] + reversed }
        return Number(reversed)
}

 
