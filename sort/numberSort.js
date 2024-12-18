let numbers = [1,3,2,4,5,8,7];

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

numbers.sort(ascending);
console.log(numbers);

numbers = [1, 2, 1, 3, 1, 1, 2, 4, 5];

numbers.sort(descending);
console.log(numbers);
 const greater = function (a,b){
if( Math.abs(a) === Math.abs(b)){
    return a - b;
}
return Math.abs(a) - Math.abs(b);

}
