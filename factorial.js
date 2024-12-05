// Q: Find the factorial of a number. The factorial of n is the product of all positive integers less than or equal to n.
// Input: 1
// Output: 1 (Factorial of 1 is 1)

// Input: 5
// Output: 120 (5 * 4 * 3 * 2 * 1)

// Input: 3
// Output: 6 (3 * 2 * 1)
const factorial = (n) => {
  let result = 1;
  for (let i = 2; i < n; i++) {
    result = result * i;
  }
  return result;
};

console.log(factorial(1));
console.log(factorial(5));
console.log(factorial(3));
