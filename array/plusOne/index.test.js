const plusOne = require(".")

describe('Testing the Remove Duplicate From the Sorted Array', () => {
  test('The First Test with digits=[1,2,3] Output=[1,2,4]', () => {
    const digits = [1,2,3]
    const res = plusOne(digits)
    expect(res).not.toBe(1)
    expect(res).toContain(1)
    expect(res).toContain(4)
    expect(res).toEqual([1,2,4])

   });

   test('The Second Test with digits=[4,3,2,1] output=[4,3,2,2]', () => {
    const digits = [4,3,2,1]
    const res = plusOne(digits)
    expect(res).not.toBe(2)
    expect(res).toEqual([4,3,2,2])
   });

   test('The third Test with digits= [9] output=[1,0]', () => {
    const digits = [9]
    const res = plusOne(digits)
    expect(res).not.toBe(2)
    expect(res).toEqual([1,0])
   });

 })