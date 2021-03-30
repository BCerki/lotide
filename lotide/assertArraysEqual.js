const eqArrays = function (arrayA, arrayB) {
  let checker = true;
  for (let i = 0; i < arrayA.length; i++) {
    if (arrayA[i] !== arrayB[i]) {
      checker = false;
    }
  }
  return checker;
}

const assertArraysEqual = function (arrayA, arrayB) {
  if (eqArrays(arrayA, arrayB)) {
    console.log('😀😀😀 Assertion Passed:',arrayA,'===',arrayB);
  } else {
    console.log('🥵🥵🥵 Assertion Failed:',arrayA,'!==',arrayB);
  }
}

assertArraysEqual(['hi', 'bye'], ['hi', 'bye']);
assertArraysEqual([null], [null]);
assertArraysEqual([1, 2, 3], [1, 2, 3]);

assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
assertArraysEqual([null], ["null"]);
assertArraysEqual([1, 2, 3], [4, 5, 6]);