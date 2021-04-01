const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`😀😀😀 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🥵🥵🥵 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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



const eqObjects = function (object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);
  // console.log('obj1keys is',object1Keys,'obj2keys is',object2Keys)
  if (object1Keys.length !== object2Keys.length) {
    return false;
  }

  for (let elementKey of object1Keys) 
  //you're working with the arrays of object keys now
  {
    // console.log('is key',elementKey,'an array?',Array.isArray(object1[elementKey]),'value is',object1[elementKey])
    
    if (Array.isArray(object1[elementKey]) && Array.isArray(object2[elementKey])) {
      if (!(eqArrays(object1[elementKey], object2[elementKey]))) {
        return false;
      }
    } else {
      if (object1[elementKey] !== object2[elementKey]) {
        return false;
      }
    }
  }
  return true;
}

//test cases

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);