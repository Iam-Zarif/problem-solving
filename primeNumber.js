// Q: Check if a number is a prime number or not.
// Input: 7
// Output: true (7 is a prime number)

// Input: 10
// Output: false (10 is not a prime number)
const isPrime = (num) => {
  if (num <= 1) return false;

  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};
console.log(isPrime(7));
console.log(isPrime(10));
