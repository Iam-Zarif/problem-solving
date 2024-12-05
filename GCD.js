// Q: Find the Greatest Common Divisor (GCD) of two numbers.
// Input: 10, 15
// Output: 5 (The largest number that divides both 10 and 15)

// Input: 24, 36
// Output: 12 (The largest number that divides both 24 and 36)

const gcd = (a, b) => {
  while (b) {
    [a, b] = [b, a % b];
  }
  return a;
};

console.log(gcd(10, 15));
console.log(gcd(24, 36));
