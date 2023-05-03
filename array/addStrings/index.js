/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const addStrings = function(num1, num2) {
  let carry = 0;
  let result = '';
  for (let i = 0; i < Math.max(num1.length, num2.length); i++) {
    const getCode = (str) => {
      const code = str.charCodeAt(str.length - i - 1)
      return Number.isNaN(code) ? 0 : code - 48;
     }
     const charResult = getCode(num1) + getCode(num2) + carry
     carry = Math.floor(charResult /10);
     result = `${charResult % 10}${result}`
  }
  return carry ? `${carry}${result}` : result
};

module.exports = addStrings