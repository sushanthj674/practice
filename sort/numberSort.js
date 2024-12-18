const numbers = [1, 2, 1, 3, 1, 1, 2, 4, 5];

const ascending = function (a, b) {
  if (a === b) {
    return 0;
  }
  if (a > b) {
    return 1;
  }
  return -1;
};

numbers.sort(ascending);
console.log(numbers);