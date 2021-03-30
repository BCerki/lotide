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
    console.log('😀😀😀 Assertion Passed:', arrayA, '===', arrayB);
  } else {
    console.log('🥵🥵🥵 Assertion Failed:', arrayA, '!==', arrayB);
  }
}


const flatten = function (array) {
  const flattenedArray = [];
  for (let i = 0; i < array.length; i++) {
    // console.log('this is outside loop',i,'array[i] is',array[i])
    if (Array.isArray(array[i])) {
      // console.log(array[i]);
      for (let j = 0; j < array[i].length; j++) {
        flattenedArray.push(array[i][j]);
      }
    } else {
      flattenedArray.push(array[i]);
    }
  }
  return flattenedArray;
}

//test cases

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten(['a', 'b', ['c'], ['d', 'e']]), ['a', 'b', 'c', 'd', 'e']);
assertArraysEqual(flatten([0, 434, 24, 24, [24, 24, 24, 564, 67], 56]), [0, 434, 24, 24, 24, 24, 24, 564, 67, 56]);
