/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let l = 0
  let r = nums.length - 1;
  while (l <= r ) {
    let mid = Math.floor((l+r)/2);
    if (nums[mid] === target) return mid
    if (target < nums[mid]) {
      r = mid -1
    } else {
      l = mid +1
    }
  }

  return l;
};

module.exports = searchInsert