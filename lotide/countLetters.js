const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`😀😀😀 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🥵🥵🥵 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (sentence) {
  const letterCount = {};
  for (const character of sentence) {
    if (character !== '') {
      if(letterCount[character]) {
        letterCount[character] += 1;
      } else {
        letterCount[character] = 1;
      }
    }
  }
  return letterCount;
}


const test = countLetters("lighthouse in the house");
assertEqual(test['l'],1)
assertEqual(test['e'],3)

const test2 = countLetters("do re mi fa so la ti do");
assertEqual(test2['d'],2)
assertEqual(test2['o'],3)