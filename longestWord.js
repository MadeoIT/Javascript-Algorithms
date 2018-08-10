/**
 * Return the length of the longest word in the provided sentence.
 * "The quick brown fox jumped over the lazy dog"
 */
const R = require('ramda');
const _ = R.__;

const strToWords = (str) => {
  const strCopy = str;
  return strCopy.split(" ");
};

const wordsToLength = (array) => array.map(word => word.length);
const findBiggestValue = (acc, value) => (acc = value > acc ? value : acc);
const findMaxLength = R.curry((array, callback) => array.reduce(callback, 0)); //Curried for ramda

const findLongestWordLength = (str) => {
  const wordsArray = strToWords(str);
  const lengthsArray = wordsToLength(wordsArray);
  return findMaxLength(lengthsArray, findBiggestValue);
};

//Using Ramda function composition pipe
const findLongestWordLengthWithRamda = (str) => R.pipe(
  strToWords,
  wordsToLength,
  findMaxLength(_, findBiggestValue)
)(str);



module.exports = {
  findLongestWordLength,
  findLongestWordLengthWithRamda,
  wordsToLength,
  findBiggestValue,
  strToWords
};