const tail = require('../tail.js');
const assertEqual = require('../assertEqual.js')

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length,3);

const empty = [];
tail(empty);
assertEqual(empty.length,0);
