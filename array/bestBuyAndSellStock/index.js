/**
 * @param {number[]} prices
 * @return {number}
 */


const maxProfit = function(_prices) {
  let _profit = 0;
  let _stockToBuy = _prices[0]

  for (let i = 0; i < _prices.length; i++) {
      if (_stockToBuy > _prices[i]) {
          _stockToBuy = _prices[i]
      }
      const _currentProfit = _prices[i] - _stockToBuy;

      if (_currentProfit > _profit ) {
        _profit = _currentProfit
      }

  }
  return _profit
};

module.exports = maxProfit