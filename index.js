// Function Declaration
function getName1(name) {
    return "Name equals " + name;
}

// Function Expression
const getName2 = function(name) {
    return "Name equals " + name;
};

// Arrow Function Expression
const getName3 = (name) => {
    return "Name equals " + name;
};

// Call each function and log the returned value
console.log(getName1("Alice")); // Name equals Alice
console.log(getName2("Bob"));   // Name equals Bob
console.log(getName3("Charlie")); // Name equals Charlie
