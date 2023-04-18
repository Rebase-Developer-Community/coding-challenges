const moveZeroes = require(".")

describe('Testing the Move Zeroes', () => {
  test('The First Test with Input: nums = [0,1,0,3,12] Output: [1,3,12,0,0]', () => {
    const nums = [0,1,0,3,12], output = [1,3,12,0,0]
    const res = moveZeroes(nums)
    expect(res).not.toBe(1)
    expect(res).toEqual(output)
   });

   test('The Second Test with nums = [0]  Output: [0]', () => {
    const nums = [0] , output= [0]
    const res =  moveZeroes(nums)
    expect(res).not.toBe(2)
    expect(res).toEqual(output)
   });
 })