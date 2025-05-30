function getSumOfNumbers(number, type = "odd") {
    // Check if number is undefined or not a number
    if (number === undefined || typeof number !== "number" || isNaN(number)) {
        return NaN;
    }

    let sum = 0;
    for (let i = 0; i <= number; i++) {
        if (type === "odd" && i % 2 === 1) {
            sum += i; // Add odd numbers
        } else if (type === "even" && i % 2 === 0) {
            sum += i; // Add even numbers
        } else if (type === "") {
            sum += i; // Add all numbers
        }
    }
    return sum;
}

// Test cases
console.log(getSumOfNumbers(10, "odd"));   // 25
console.log(getSumOfNumbers(10, "even"));  // 30
console.log(getSumOfNumbers(10, ""));      // 55
console.log(getSumOfNumbers());            // NaN
console.log(getSumOfNumbers("10"));        // NaN
console.log(getSumOfNumbers(5));          // 9 (default type "odd": 1 + 3 + 5)
