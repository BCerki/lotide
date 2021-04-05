const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");


assertArraysEqual(middle([1]),[]);
assertArraysEqual(middle([1,2]),[]);
assertArraysEqual(middle([1,2,3,4,5,6,7,8]),[4,5]);
assertArraysEqual(middle([1,2,3,4,5,6,7,8,9]),[5]);
assertArraysEqual(middle(['beg','mid','end']),['mid']);
assertArraysEqual(middle(['beg','mid1','mid2','end']),['mid1','mid2']);

