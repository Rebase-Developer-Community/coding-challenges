const removeElement = require(".")

describe('Testing the Remove Duplicate From the Sorted Array', () => {
  test('The First Test with nums = [3,2,2,3], val = 3', () => {
    const nums = [3,2,2,3]
    const val = 3
    const res = removeElement(nums,val)
    expect(res).not.toBe(1)
    expect(res).toBe(2)
   });

   test('The Second Test with nums=[0,1,2,2,3,0,4,2] val=2', () => {
    const nums = [0,1,2,2,3,0,4,2]
    const val = 2
    const res = removeElement(nums,val)
    expect(res).not.toBe(2)
    expect(res).toBe(5)
   });

 })