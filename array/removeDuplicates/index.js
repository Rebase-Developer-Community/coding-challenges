/**
 * @param {number[]} nums
 * @return {number}
 */

const removeDuplicate = function (nums) {
  let i =0;
  while (i< nums.length - 1) {
    let j = i+1;
    if (nums[i]===nums[j]) {
      nums.splice(j,1);
    }else {
      i++;
    }
  }
  return nums.length;
};


module.exports = removeDuplicate