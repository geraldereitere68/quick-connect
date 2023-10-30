/* 
 * Filename: complexCodeExample.js
 * Content: A complex JavaScript code example demonstrating various concepts and techniques.
 */

// Constants
const PI = 3.14159;
const MAX_ITERATIONS = 1000;

// Data Structure
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  distanceTo(otherPoint) {
    const dx = Math.abs(this.x - otherPoint.x);
    const dy = Math.abs(this.y - otherPoint.y);
    return Math.sqrt(dx * dx + dy * dy);
  }
}

// Utility Functions
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function capitalizeString(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Object Creation and Usage
const center = new Point(0, 0);
const pointA = new Point(getRandomInteger(-10, 10), getRandomInteger(-10, 10));
const pointB = new Point(getRandomInteger(-10, 10), getRandomInteger(-10, 10));

console.log(`Distance between pointA and pointB: ${pointA.distanceTo(pointB)}`);
console.log(`Distance between pointA and center: ${pointA.distanceTo(center)}`);

// Function Composition
function compose(...fns) {
  return (x) => fns.reduceRight((acc, fn) => fn(acc), x);
}

const add2 = (x) => x + 2;
const multiply3 = (x) => x * 3;
const square = (x) => x * x;
const composedFunction = compose(add2, multiply3, square);

console.log(`Composed function result: ${composedFunction(5)}`);

// Complex Algorithm
function findNthPrime(n) {
  let count = 0;
  let number = 2;

  while (count < n) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        isPrime = false;
        break;
      }
    }
    
    if (isPrime) {
      count++;
      if (count === n) {
        return number;
      }
    }

    number++;
  }
}

console.log(`5th prime number: ${findNthPrime(5)}`);

// Recursive Function
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(`Fibonacci number at position 10: ${fibonacci(10)}`);

// Event Handling
const button = document.getElementById('btnCalculate');
button.addEventListener('click', function() {
  const inputValue = document.getElementById('inputNumber').value;
  const squareValue = square(Number(inputValue));
  alert(`Square value: ${squareValue}`);
});

// Promises
function fetchData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/data") {
        resolve({ data: 'Success' });
      } else {
        reject(new Error('Failed to fetch data'));
      }
    }, 2000);
  });
}

fetchData("https://example.com/api/data")
  .then((response) => console.log(response))
  .catch((error) => console.error(error));