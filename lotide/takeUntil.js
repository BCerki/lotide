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


const takeUntil = function (array, callback) {
  const results = [];
  for (const element of array) {
    if (!callback(element)) {
      results.push(element);
      // console.log(results);
    } else {
      return results;
    }
  }

  return results;
};



// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

//test cases

assertArraysEqual(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0),[ 1, 2, 5, 7, 2 ])

assertArraysEqual(takeUntil([2,4,5,3], x => x === 3),[2,4,5])
