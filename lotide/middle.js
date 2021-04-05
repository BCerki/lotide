const middle = function(array) {
  let middleArray = [];
  if (array.length <= 2) {
    return middleArray;
  }
  if (array.length % 2 === 0) {
    middleArray.push(array[array.length/2 -1],array[array.length/2]);
    // console.log('even',middleArray)
  } else {
    middleArray.push(array[Math.floor(array.length/2)]);
    // console.log('odd',middleArray)
  }
  return middleArray;
}
// console.log(middle([]))

module.exports = middle;

