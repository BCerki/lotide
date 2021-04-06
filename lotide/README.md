# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @bcerki/lotide`

**Require it:**

`const _ = require('@bcerki/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: Check if two arrays are equal and return a console message
* `assertEqual`: Check if two primative values are equal and return a console message
* `assertObjectEqual`: Check if two objects are equal and return a console message
* `countLetters`: Return an object that displays how many times each letter of a string appears
* `countOnly`: Count items in an array only if they also appear in a given object
* `eqArrays`: Check if two arrays are equal and return a boolean
* `eqObjects`: Check if two arrays are equal and return a boolean
* `findKey`: Returns the first key that gives a truthy value
* `findKeyByValue`: Returns the key of a given value
* `flatten`: Change an array that includes nested arrays into a non-nested array
* `head`: Return the first value in an array
* `letterPositions`: Returns the indices of letters in a string
* `map`: Return a new array after running it through a function
* `middle`: Return the middle value(s) of an array
* `tail`: Return the last value in an array
* `takeUntil`: Return a string up until a specified point
* `without`: Return a new array with elements removed