const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`😀😀😀 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🥵🥵🥵 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function (array) {
  return array[0]
};

// TEST CASES
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([89]), 89);
assertEqual(head([]), undefined);