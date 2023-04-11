const majorityElement = require(".")

describe('Testing the Majority Element', () => {
  test('The First Test with Input: nums = [3,2,3], Output = 3', () => {
    const nums = [3,2,3], output = 3
    const res = majorityElement(nums)
    expect(res).not.toBe(1)
    expect(res).toBe(output)

   });

   test('The Second Test with nums = [2,2,1,1,1,2,2], OutPut= 2 ', () => {
    const nums = [2,2,1,1,1,2,2], output = 2
    const res =  majorityElement(nums)
    expect(res).not.toBe(5)
    expect(res).toBe(output)
   });

 })