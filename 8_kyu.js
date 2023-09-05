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

# Q4 #
function smash(words) {
    if (words.length === 0) {
        return ""
    } else {
        return (words.join(" "))
    }
};

# Q5 #
function twoHighestet(arr) {
    const uniqueValues = new Set(arr);
    const sortedValues = Array.from(uniqueValues).sort((a, b) => b - a);

    return sortedValues.slice(0, 2)
}

# Q6 #
function chromosomeCheck(sperm) {
  if (sperm === 'XX') {
    return "Congratulations! You're going to have a daughter."
  } else {
    return "Congratulations! You're going to have a son."
  }
}

# Q7 #
function repeatStr (n, s) {
    var result = "";

    while (n > 0) {
        result += s;
        n --;

    }

    return result;
}
