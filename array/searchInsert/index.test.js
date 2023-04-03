const searchInsert = require(".")

describe('Testing the Remove Duplicate From the Sorted Array', () => {
  test('The First Test with nums =[1,3,5,6],target = 5', () => {
    const nums =[1,3,5,6]
    const target = 5
    const res = searchInsert(nums,target)
    expect(res).not.toBe(1)
    expect(res).toBe(2)
   });

   test('The Second Test with nums = [1,3,5,6], target = 2', () => {
    const nums = [1,3,5,6]
    const target = 2
    const res = searchInsert(nums,target)
    expect(res).not.toBe(2)
    expect(res).toBe(1)
   });

 })