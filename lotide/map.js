const eqArrays = function (arrayA, arrayB) {
  let checker = true;
  if (arrayA.length !== arrayB.length) {
    checker = false;
  }
  for (let i = 0; i < arrayA.length; i++) {
    if (arrayA[i] !== arrayB[i]) {
      checker = false;
    }
  }
  return checker;
}

const assertArraysEqual = function (arrayA, arrayB) {
  if (eqArrays(arrayA, arrayB)) {
    console.log('😀😀😀 Assertion Passed:', arrayA, '===', arrayB);
  } else {
    console.log('🥵🥵🥵 Assertion Failed:', arrayA, '!==', arrayB);
  }
}

const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  // console.log('array: ', array);
  // console.log('callback: ', callback);
  const results = [];
  for (let item of array) {
    // console.log('before',item);
    // console.log('after',callback(item));
    // console.log('---');
    results.push(callback(item));
  }


  return results;
};

// const results1 = map(words, word => word[0]);
// console.log(results1);


//test cases
const array1 = [1, 1, 1];
const func1 = function (num) {
  return num + 1;
};
const test1 = map(array1, func1);
assertArraysEqual(test1, [2, 2, 2]);

const array2 = ['a', 'b', 'c'];
const func2 = letter => letter.toUpperCase();
const test2 = map(array2, func2);
assertArraysEqual(test2, ['A', 'B', 'C']);



const test3 = map([9, 3], num => num / 3);
assertArraysEqual(test3, [3,1]);

assertArraysEqual((map([9, 3], num => num / 3)), [3,1]);