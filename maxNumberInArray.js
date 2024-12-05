const maxNum = (arr) => {
  let max = arr[0];

  for (let num of arr) {
    if (num > max) {
      max = num;
    }
  }
  return max;
};

console.log(maxNum([1, 2, 3, 4, 5]));
console.log(maxNum([10, 20, 30, 40, 50]));
