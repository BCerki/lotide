const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀😀😀 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🥵🥵🥵 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(object,value) {
  for (const key in object) {
    if(object[key] === value) {
      return key;
    }
  }
}
//Come back to later and do it using the Tips/Object.keys?


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const someNumbers = {
  like: 3,
  hate: 666,
  meh: 7
}

assertEqual(findKeyByValue(someNumbers, 3), 'like');
assertEqual(findKeyByValue(someNumbers, 7),'meh');