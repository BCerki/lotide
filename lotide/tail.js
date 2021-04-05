const tail = function(array) {
  const newArray = [];
  for (let i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
console.log(tail(["Yo Yo", "Lighthouse", "Labs"]))

module.exports = tail;
