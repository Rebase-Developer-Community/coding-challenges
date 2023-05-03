const addStrings = require(".")

describe('Testing #415 adding stings ', () => {
  test('The First Test with Input:  num1 = "11", num2 = "123", output ="134"', () => {
    const  num1 = "11", num2 = "123", output = "134"
    const res = addStrings(num1, num2)
    expect(res).not.toBe(5)
    expect(res).toEqual(output)
   });

   test('The Second Test with num1 = "456", num2 = "77",  output="533"', () => {
    const num1 = "456", num2 = "77",  output= "533"
    const res =  addStrings(num1, num2)
    expect(res).not.toBe(1)
    expect(res).toEqual(output)
   });

   test('The Third Test with num1 = "0", num2 = "0",  output= "0"', () => {
    const num1 = "0", num2 = "0",  output="0"
    const res =  addStrings(num1, num2)
    expect(res).not.toBe(2)
    expect(res).toEqual(output)
   });

 })