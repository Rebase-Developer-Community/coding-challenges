const merge = require(".")

describe('Testing the Remove Duplicate From the Sorted Array', () => {
  test('The First Test with Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3', () => {
    const nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
    const res = merge(nums1, m, nums2, n)
    expect(res).not.toBe(1)
    expect(res).toEqual([1,2,2,3,5,6])
   });

   test('The Second Test with nums1 = [1], m = 1, nums2 = [], n = 0', () => {
    const nums1 = [1], m = 1, nums2 = [], n = 0
    const res =  merge(nums1, m, nums2, n)
    expect(res).not.toBe(2)
    expect(res).toEqual([1])
   });

   test('The third Test with nums1 = [0], m = 0, nums2 = [1], n = 1', () => {
    const nums1 = [0], m = 0, nums2 = [1], n = 1
    const res =  merge(nums1, m, nums2, n)
    expect(res).not.toBe(2)
    expect(res).toEqual([1])
   });

 })