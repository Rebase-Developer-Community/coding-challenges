const maxProfit = require(".")

describe('Testing the Best Time to Buy and Sell Stock ', () => {
  test('The First Test with Input: prices = [7,1,5,3,6,4], Output = 5', () => {
    const prices = [7,1,5,3,6,4], output = 5
    const res = maxProfit(prices)
    expect(res).not.toBe(1)
    expect(res).toBe(output)

   });

   test('The Second Test with prices = [7,6,4,3,1], OutPut= 0 ', () => {
    const prices = [7,6,4,3,1], output = 0
    const res =  maxProfit(prices)
    expect(res).not.toBe(2)
    expect(res).toBe(output)
   });

 })