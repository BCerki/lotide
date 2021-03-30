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

const without = function(source,itemsToRemove) {
  const editedArray = Array.from(source);
   
  for (let i = 0; i < editedArray.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (editedArray[i] === itemsToRemove[j]) {
        editedArray.splice(i,1);
      }
    }
  }
  return editedArray;
}

//test cases

const test1 = [1, 2, 3];
assertArraysEqual([2, 3],without(test1,[1]));


const test2 = ["1", "2", "3"]
assertArraysEqual(["3"],without(test2,["1", "2"]));

const test3 = ["1", "2", "3"]
assertArraysEqual(["1", "2", "3"],without(test2,[1, 2]));


const words = ["hello", "world", "lighthouse"];
without(words, ['lighthouse']);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);