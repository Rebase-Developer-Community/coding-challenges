/**
 * @param {number[]} nums
 * @return {number}
 */

const removeDuplicate = function (nums) {
  let insertIndex = 1;
    for (let i = 1; i < nums.length; i++) {
      if (nums[i -1] != nums[i]) {
          nums[insertIndex] = nums[i]
          insertIndex++;
      }
    }
  return insertIndex
};


module.exports = removeDuplicate