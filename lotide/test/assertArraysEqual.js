const assertArraysEqual = require('../assertArraysEqual.js')

//passes
assertArraysEqual(['hi', 'bye'], ['hi', 'bye']);
assertArraysEqual([null], [null]);
assertArraysEqual([1, 2, 3], [1, 2, 3]);

//failures
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
assertArraysEqual([null], ["null"]);
assertArraysEqual([1, 2, 3], [4, 5, 6]);