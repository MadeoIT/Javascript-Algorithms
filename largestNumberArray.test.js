const { largestOfFour, findMaxValue, largestOfFourRamda } = require('./largestNumberArray');

describe('Largest number in array', () => {
  const arrayOfArray = [[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]];

  it('should return the biggest value', () => {
    const maxValue1 = findMaxValue(18, 13);
    const maxValue2 = findMaxValue(13, 18);

    expect(maxValue1).toBe(18);
    expect(maxValue2).toBe(18);
  })

  it('should return the largest number from sub-array', () => {
    const result = largestOfFour(arrayOfArray);

    expect(result).toEqual(expect.arrayContaining([25, 48, 21, -3]))
  });

  it('should return the largest number from sub-array / Ramda', () => {
    const result = largestOfFourRamda(arrayOfArray);

    expect(result).toEqual(expect.arrayContaining([25, 48, 21, -3]))
  });
})