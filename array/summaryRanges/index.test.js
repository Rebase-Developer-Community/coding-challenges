const summaryRanges = require(".")

describe('Testing the Summary Ranges', () => {
  test('The First Test with Input: nums = [0,1,2,4,5,7] , Output : ["0->2","4->5","7"]', () => {
    const nums = [0,1,2,4,5,7] , output= ["0->2","4->5","7"]
    const res = summaryRanges(nums)
    expect(res).not.toBe(1)
    expect(res).toEqual(output)
   });

   test('The Second Test with nums = [0,2,3,4,6,8,9], Output: ["0","2->4","6","8->9"]', () => {
    const nums = [0,2,3,4,6,8,9], output=["0","2->4","6","8->9"]
    const res =  summaryRanges(nums)
    expect(res).not.toBe(2)
    expect(res).toEqual(output)
   });
 })