// Q: Check if a number is a power of two.
// A number is a power of two if it can be expressed as 2^k, where k is a non-negative integer.
// Input: 2
// Output: true (2 is 2^1)

// Input: 29
// Output: false (29 is not a power of 2)

// Input: 30
// Output: false (30 is not a power of 2)

const powerOfTwo = (n) => {
  if (n <= 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
};

console.log(powerOfTwo(2));
console.log(powerOfTwo(29));
console.log(powerOfTwo(30));
