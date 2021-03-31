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
    console.log('😀😀😀 Assertion Passed:',arrayA,'===',arrayB);
  } else {
    console.log('🥵🥵🥵 Assertion Failed:',arrayA,'!==',arrayB);
  }
}

const middle = function(array) {
  let middleArray = [];
  if (array.length <= 2) {
    return middleArray;
  }
  if (array.length % 2 === 0) {
    middleArray.push(array[array.length/2 -1],array[array.length/2]);
    // console.log('even',middleArray)
  } else {
    middleArray.push(array[Math.floor(array.length/2)]);
    // console.log('odd',middleArray)
  }
  return middleArray;
}
// console.log(middle([]))

//test cases
assertArraysEqual(middle([1]),[]);
assertArraysEqual(middle([1,2]),[]);
assertArraysEqual(middle([1,2,3,4,5,6,7,8]),[4,5]);
assertArraysEqual(middle([1,2,3,4,5,6,7,8,9]),[5]);
assertArraysEqual(middle(['beg','mid','end']),['mid']);
assertArraysEqual(middle(['beg','mid1','mid2','end']),['mid1','mid2']);
