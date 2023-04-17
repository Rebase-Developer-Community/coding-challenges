const generate = require(".")

describe(`Testing the Pascal's Triangle`, () => {

  test('The First Test with numRows = 5 Output=[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]', () => {
    const numRows = 5 ,output=[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
    const res = generate(numRows)
    expect(res).not.toBe(1)
    expect(res).toEqual(output)
   });

   test('The Second Test with numRows = 1 output=[[1]]', () => {
    const numRows = 1,output=[[1]]
    const res = generate(numRows)
    expect(res).not.toBe(2)
    expect(res).toEqual(output)
   });

 })