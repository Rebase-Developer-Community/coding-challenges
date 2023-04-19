const intersection = require(".")

describe('Testing the Intersection of Two Array', () => {
  test('The First Test with Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4], output =[4,9]', () => {
    const nums1 = [4,9,5], nums2 = [9,4,9,8,4], output = [4,9]
    const res = intersection(nums1,nums2)
    expect(res).not.toBe(1)
    expect(res).toEqual(output)
   });

   test('The Second Test with nums1 = [1,2,2,1], nums2 = [2,2], output=[2]', () => {
    const nums1 = [1,2,2,1], nums2 = [2,2], output=[2]
    const res =  intersection(nums1,nums2)
    expect(res).not.toBe(2)
    expect(res).toEqual(output)
   });
 })