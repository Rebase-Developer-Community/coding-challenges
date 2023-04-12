const missingNumber = require(".")

describe('Testing the Missing Number', () => {
  test('The First Test with Input: nums = [3,0,1], Output = 2', () => {
    const nums = [3,0,1], output = 2
    const res = missingNumber(nums)
    expect(res).not.toBe(1)
    expect(res).toBe(output)

   });

   test('The Second Test with nums = [0,1], OutPut= 2 ', () => {
    const nums = [0,1], output = 2
    const res =  missingNumber(nums)
    expect(res).not.toBe(5)
    expect(res).toBe(output)
   });

   test('The Third Test with nums = [9,6,4,2,3,5,7,0,1], OutPut= 8 ', () => {
    const nums = [9,6,4,2,3,5,7,0,1], output = 8
    const res =  missingNumber(nums)
    expect(res).not.toBe(5)
    expect(res).toBe(output)
   });

 })