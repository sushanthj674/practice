// const people = ["sushanth", "akash", "jayanth", "kumar", "SUSHANTH"];
// const fruits = ["apple", "orange", "banana", "papaya"];

const printDetails = function (statement) {
  const [ele,occr] = statement
	console.log(ele,' is repeated ',occr);
}

// const cycle = function (cycleOf) {
//   let currentCycle = 0;
//   return function () {
//     if (currentCycle === cycleOf) {
//       currentCycle = 0;
//     }
//     return currentCycle++;
//   };
// };
// const nextFruit = cycle(fruits.length);

// const distribute = function (items) {
//   return function (person) {
//     return person + ' ' + items[nextFruit()];
//   };
// };



// people.map(distribute(fruits)).forEach(printDetails);


const isContains = function (arr, element) {
  if (!arr.includes(element)) {
    arr.push(element);
  }
  return arr;
};

const removeDuplicates = function (numbers) {
  return numbers.reduce(isContains, []);
};

const arr = [0, 1, 1, 2, 2, 3, 4, 5];

const count = function (ele) {
  return function (cnt, element) {
    if (ele === element) {
      cnt[1] += 1;
    }
    return cnt;
  };

};

const timesOccured = function (arr) {
  return function (ele) {
    return arr.reduce(count(ele), [ele, 0]);
  };
};

const occrences = function (arr) {
  const array = Array.from(arr)
  const uniqueValues = removeDuplicates(array);
  return uniqueValues.map(timesOccured(array));
};  
const numsArr = [1, 2, 3, 4, 4, 4, 4];
const str = 'im a string ';
const strArray = ['apple', 'apple', 'banana', 'cat', 'cat', 'cat', 'cat'];
console.log(numsArr);
occrences(numsArr).forEach(printDetails);
console.log(str);

occrences(str).forEach(printDetails);
console.log(strArray);

occrences(strArray).forEach(printDetails);