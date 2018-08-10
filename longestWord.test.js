const { 
  findLongestWordLength, strToWords, wordsToLength, findBiggestValue, findLongestWordLengthWithRamda
} = require('./longestWord');

describe.skip('Return the longest words length', () => {
  const str = "The quick brown fox jumped over the lazy dog"

  it('should split a string into words', () => {
    const arrayOfWords = strToWords(str);

    expect(arrayOfWords.length).toBe(9)
  });

  it('should return an array of length', () => {
    const lengthsArray = wordsToLength(['hello', 'mom']);

    expect(lengthsArray).toEqual(expect.arrayContaining([5, 3]))
  });

  it('should return the biggest value', () => {
    const maxValue1 = findBiggestValue(34, 6);
    const maxValue2 = findBiggestValue(34, 50);

    expect(maxValue1).toBe(34);
    expect(maxValue2).toBe(50);
  })

  it('should return length of the longest word in a string', () => {
    
    const longestWordLength = findLongestWordLength(str);

    expect(longestWordLength).toBe(6)
  });

  it('should return length of the longest word in a string / Ramda', () => {
    
    const longestWordLength = findLongestWordLengthWithRamda(str);

    expect(longestWordLength).toBe(6)
  });
})