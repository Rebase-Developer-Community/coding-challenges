/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = function(nums) {

  let arr = []
  let n = nums.length
  let ans = new Set(nums)

  for (let i = 1; i <= n; i++) {
    if (!ans.has(i)) {
      arr.push(i)
    }
  }
  return arr
};

module.exports = findDisappearedNumbers