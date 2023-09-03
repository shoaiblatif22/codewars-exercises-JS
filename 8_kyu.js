# Q1 #
function sameCase(a, b){
    if (a.toUpperCase() === b.toLowerCase() || a.toLowerCase() === b.toUpperCase()){
        return -1
    } else if (a === a.toLowerCase() && b === b.toLowerCase() || a === a.toUpperCase() && b === b.toUpperCase()){
        return 1
    } else {
        return 0
    }
    
}

# Q2 #
function joinStrings(string1, string2) {
    return '${string1} ${string2}'
}

# Q3 #
function squareSum(numbers) {
    const squareSum = numbers.map(numbers => numbers ** 2)
    const sum = squareSum.reduce((accumulator, currentValue) => accumulator, currentValue, 0)

    return sum;
}
