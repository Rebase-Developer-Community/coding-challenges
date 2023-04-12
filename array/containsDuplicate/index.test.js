const containsNearbyDuplicate = require(".")

describe('Testing the Contains Duplicate II', () => {
  test('The First Test with Input: nums = [1,2,3,1], k = 3, Output = true', () => {
    const  nums = [1,2,3,1], k = 3, output = true
    const res = containsNearbyDuplicate(nums,k)
    expect(res).not.toBe(1)
    expect(res).toBe(output)

   });

   test('The Second Test with nums = [1,0,1,1], k = 1, OutPut= true ', () => {
    const nums = [1,0,1,1], k = 1, output = true
    const res =  containsNearbyDuplicate(nums,k)
    expect(res).not.toBe(5)
    expect(res).toBe(output)
   });

   test('The Third Test with nums = [1,2,3,1,2,3], k = 2, OutPut= false ', () => {
    const nums = [1,2,3,1,2,3], k = 2, output = false
    const res =  containsNearbyDuplicate(nums,k)
    expect(res).not.toBe(5)
    expect(res).toBe(output)
   });

 })