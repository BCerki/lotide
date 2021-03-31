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

const letterPositions = function (sentence) {
  const results = {};
  // const noSpaces = sentence.replace(/ /g,'');
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {

      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }

  return results;
}

const test = {
  h: [0],
  e: [1],
  l: [2, 3],
  o: [4]
}
console.log(letterPositions('lighthouse in the house'));
// lighthouseisinthehouse

assertArraysEqual(letterPositions('hello')['h'], test['h']);
assertArraysEqual(letterPositions('hello').e, [1]);

// if (sentence[i] === ' ') {
//   continue;
// }