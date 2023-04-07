const sortedArrayToBST = require(".")

describe('Testing the Remove Duplicate From the Sorted Array', () => {
  test('The First Test with nums = [-10,-3,0,5,9] Output=[0,-3,9,-10,null,5]', () => {
    const nums = [-10,-3,0,5,9] ,output=[0,-3,9,-10,null,5]
    const res = sortedArrayToBST(nums)
    expect(res).not.toBe(1)

    expect(res).toEqual({"left": {"left": {"left": null, "right": null, "val": -10}, "right": null, "val": -3}, "right": {"left": {"left": null, "right": null, "val": 5}, "right": null, "val": 9}, "val": 0})

   });

   test('The Second Test with nums = [1,3] output=[3,1]', () => {
    const nums = [1,3],output=[3,1]
    const res = sortedArrayToBST(nums)
    expect(res).not.toBe(2)
    expect(res).toEqual({"left": {"left": null, "right": null, "val": 1}, "right": null, "val": 3})
   });

 })