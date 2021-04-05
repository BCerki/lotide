const eqArrays = require('../eqArrays')
const assertEqual = require('../assertEqual');

assertEqual(eqArrays(['hi','bye'], ['hi','bye']), true);
assertEqual(eqArrays([null], [null]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
assertEqual(eqArrays([null], ["null"]), false);
assertEqual(eqArrays([1,2,3], [4,5,6]), false);
assertEqual(eqArrays([1,2,3], [1,2,3,4]), false);

assertEqual(eqArrays(['hi','bye'], ['hi','bye']), true);
assertEqual(eqArrays([null], [null]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

