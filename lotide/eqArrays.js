const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`😀😀😀 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🥵🥵🥵 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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





// test cases
assertEqual(eqArrays(['hi','bye'], ['hi','bye']), true);
assertEqual(eqArrays([null], [null]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
assertEqual(eqArrays([null], ["null"]), false);
assertEqual(eqArrays([1,2,3], [4,5,6]), false);
assertEqual(eqArrays([1,2,3], [1,2,3,4]), false);
