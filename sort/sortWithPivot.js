const numbers = [1, 4, 5, 7, 3, 6, 8, 9, 2];


const ascending = function (a, b) {
  if (a === b) {
    return 0;
  }
  if (a > b) {
    return 1;
  }
  return -1;
};

const descending = function (a, b) {
  if (a === b) {
    return 0;
  }
  if (a < b) {
    return 1;
  }
  return -1;
};


const comparator = function (pivot) {
  return function (a, b) {
    if (a > pivot && b > pivot) {
      return descending(a, b);
    }
    return ascending(a, b);
  };

};

numbers.sort(comparator(5));
console.log(numbers);