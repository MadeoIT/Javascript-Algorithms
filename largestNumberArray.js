/**
 * Return an array consisting of the largest number from each provided sub-array. 
 * For simplicity, the provided array will contain exactly 4 sub-arrays.
 * EX: largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]) 
 * should return [25, 48, 21, -3].
 */
const R = require('ramda');
const _ = R.__;

const findMaxValue = (maxVal, current) => (maxVal = current > maxVal ? current : maxVal);
const findMaxValueInArray = R.curry((array, callback) => array.reduce(callback));

const largestOfFour = (arrayOfArray) => {
  return arrayOfArray
    .map(array => findMaxValueInArray(array, findMaxValue))
};

const largestOfFourRamda = (arrayOfArray) => {
  return R.map(
    findMaxValueInArray(_, findMaxValue),
    arrayOfArray
  )
}

module.exports = {
  largestOfFourRamda,
  largestOfFour,
  findMaxValue,
}