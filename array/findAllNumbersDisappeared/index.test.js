const findDisappearedNumbers = require(".")

describe('Testing the Intersection of Two Array', () => {
  test('The First Test with Input: nums = [4,3,2,7,8,2,3,1], output =[5,6]', () => {
    const nums = [4,3,2,7,8,2,3,1], output = [5,6]
    const res = findDisappearedNumbers(nums)
    expect(res).not.toBe(1)
    expect(res).toEqual(output)
   });

   test('The Second Test with nums1 = [1,1],  output=[2]', () => {
    const nums1 = [1,1],  output=[2]
    const res =  findDisappearedNumbers(nums1)
    expect(res).not.toBe(2)
    expect(res).toEqual(output)
   });
 })