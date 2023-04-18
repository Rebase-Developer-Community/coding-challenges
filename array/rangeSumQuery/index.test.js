const NumArray = require(".")

describe('Testing the Move Zeroes', () => {
  test('The First Test with Input: nums = [-2, 0, 3, -5, 2, -1] Output: [0, 2], [2, 5], [0, 5]', () => {
    const nums = [-2, 0, 3, -5, 2, -1], output = 1
    const res = new NumArray(nums)
    expect(res).not.toBe(1)
    expect(res.sumRange(0,2)).toEqual(output)
    expect(res.sumRange(0,5)).toEqual(-3)
    expect(res.sumRange(2,5)).toEqual(-1)
   });


 })