const removeDuplicate = require(".")

describe('Testing the Remove Duplicate From the Sorted Array', () => {
  test('The First Test with nums=[1,1,2]', () => {
    const nums = [1,1,2]
    const res = removeDuplicate(nums)
    expect(res).not.toBe(1)
    expect(res).toBe(2)
   });

   test('The First Test with nums=[0,0,1,1,1,2,2,3,3,4]', () => {
    const nums = [0,0,1,1,1,2,2,3,3,4]
    const res = removeDuplicate(nums)
    expect(res).not.toBe(2)
    expect(res).toBe(5)
   });

   test('The First Test with nums= [0,0,1,1,1,2,2,3,3,4,4,4,5]', () => {
    const nums = [0,0,1,1,1,2,2,3,3,4]
    const res = removeDuplicate(nums)
    expect(res).not.toBe(2)
    expect(res).toBe(5)
   });

 })