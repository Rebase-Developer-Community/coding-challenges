/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */


const moveZeroes = function(nums) {

  let size = nums.length -1;
  for (let i = size; i >= 0; i--) {
   if (nums[i] ===0) {
    nums.splice(i,1);
    nums.push(0)
   }
  }
  return nums
};


module.exports = moveZeroes