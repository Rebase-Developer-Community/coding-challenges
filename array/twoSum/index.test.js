const twoSum = require('./index');

describe('Test The TwoSum Function', () => {
  test('The First Test nums = [2,7,11,15], target = 9 return [0,1] ', () => {
    const nums = [2, 7, 11, 15], target = 9;
    const res = twoSum(nums, target)
    expect(res[0]).toBe(0)
    expect(res[1]).toBe(1)
  })

  test('The Second Test nums = [3,2,4], target = 6 return [1,2] ', () => {
    const nums = [3, 2, 4], target = 6;
    const res = twoSum(nums, target)
    expect(res[0]).toBe(1)
    expect(res[1]).toBe(2)
  })

  test('The Second Test nums = [3,3], target = 6 return [0,1] ', () => {
    const nums = [3, 3], target = 6;
    const res = twoSum(nums, target)
    expect(res[0]).toBe(0)
    expect(res[1]).toBe(1)
  })

})