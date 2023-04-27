const thirdMax = require(".")

describe('Testing the Intersection of Two Array', () => {
  test('The First Test with Input: nums = [3,2,1], output =1', () => {
    const nums = [3,2,1], output = 1
    const res = thirdMax(nums)
    expect(res).not.toBe(5)
    expect(res).toEqual(output)
   });

   test('The Second Test with nums1 = [1,2],  output=2', () => {
    const nums1 = [1,2],  output=2
    const res =  thirdMax(nums1)
    expect(res).not.toBe(1)
    expect(res).toEqual(output)
   });

   test('The Third Test with nums1 = [2,2,3,1],  output= 1', () => {
    const nums1 = [2,2,3,1],  output=1
    const res =  thirdMax(nums1)
    expect(res).not.toBe(2)
    expect(res).toEqual(output)
   });

 })