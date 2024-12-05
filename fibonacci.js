// Q: Generate the first 'n' numbers of the Fibonacci sequence.
// Input: 4
// Output: [0, 1, 1, 2] (The first 4 Fibonacci numbers)

// Input: 5
// Output: [0, 1, 1, 2, 3] (The first 5 Fibonacci numbers)

const fibonacci = (n) => {
  const nums = [0, 1];
  for (let i = 2; i < n; i++) {
    nums[i] = nums[i - 1] + nums[i - 2];
  }
  return nums;
};

console.log(fibonacci(4));
console.log(fibonacci(5));
