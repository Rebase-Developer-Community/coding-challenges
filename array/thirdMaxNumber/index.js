/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  let set = [...new Set(nums)]
  set.sort((a,b) => a-b)
  if (set.length < 3) {
    return set[set.length -1]
  }
  return set[set.length-3]
};

module.exports = thirdMax