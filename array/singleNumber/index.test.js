const singleNumber = require(".")

describe('Testing the Single Number ', () => {
  test('The First Test with Input: nums = [2,2,1], Output = 1', () => {
    const nums = [2,2,1], output = 1
    const res = singleNumber(nums)
    expect(res).not.toBe(2)
    expect(res).toBe(output)

   });

   test('The Second Test with nums = [4,1,2,1,2], OutPut= 4 ', () => {
    const nums = [4,1,2,1,2], output = 4
    const res =  singleNumber(nums)
    expect(res).not.toBe(2)
    expect(res).toBe(output)
   });

 })