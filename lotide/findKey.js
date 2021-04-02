const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`😀😀😀 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🥵🥵🥵 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function (object, callback) {
  for (let key in object) {
    // console.log('elementKey is',key,'callback is',callback(key))
    if (callback(object[key])) {
      // console.log('is if running')
      return key;
    }
  }
};


assertEqual(findKey({ a: 1, b: 2 }, x => x === 1), 'a');


assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), 'noma');

assertEqual(findKey({ mug: 'tea', plate: 'cookie' }, x => x === 'cookie'), 'plate');