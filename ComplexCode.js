'''
Filename: ComplexCode.js

Description: This code implements a complex and sophisticated algorithm to find the largest prime factor of a given number. It utilizes advanced mathematical concepts and techniques to optimize the factorization process.

Author: CodeGuru

'''

// Function to check if a number is prime
function isPrime(number) {
    if (number <= 1) {
        return false;
    }

    for(let i = 2; i <= Math.sqrt(number); i++) {
        if(number % i === 0) {
            return false;
        }
    }

    return true;
}

// Function to find the largest prime factor of a number
function largestPrimeFactor(number) {
    let largestFactor = 1;

    // Handle divisible by 2
    while (number % 2 === 0) {
        largestFactor = 2;
        number /= 2;
    }

    // Handle divisible by odd numbers
    for (let i = 3; i <= Math.sqrt(number); i += 2) {
        while (number % i === 0) {
            largestFactor = i;
            number /= i;
        }
    }

    // Handle remaining prime number
    if (number > 2 && isPrime(number)) {
        largestFactor = number;
    }

    return largestFactor;
}

// Test the algorithm
const numberToFactorize = 9876543210;
const result = largestPrimeFactor(numberToFactorize);

console.log(`Largest prime factor of ${numberToFactorize} is: ${result}`);
