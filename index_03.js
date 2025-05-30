function getDivisorsCount(number) {
    // Check if number is undefined or not a number
    if (number === undefined || typeof number !== "number" || isNaN(number)) {
        return NaN;
    }

    // Check if number is less than zero or not an integer
    if (number < 0 || !Number.isInteger(number)) {
        alert("number must be an integer and greater than zero!");
        return NaN;
    }

    // Count divisors
    let count = 0;
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            count++;
        }
    }

    return count;
}

// Test cases
console.log(getDivisorsCount(4));   // 3
console.log(getDivisorsCount(5));   // 2
console.log(getDivisorsCount(12));  // 6
console.log(getDivisorsCount(30));  // 8
console.log(getDivisorsCount());    // NaN
console.log(getDivisorsCount(-4));  // NaN (with alert)
console.log(getDivisorsCount(3.5)); // NaN (with alert)
console.log(getDivisorsCount("12")); // NaN
