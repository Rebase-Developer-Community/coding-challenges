/**
 * @param {number[]} nums
 */
const NumArray = function(nums) {
  this.prefix = []
  let cur =0;
  for (const num of nums) {
      cur += num
      this.prefix.push(cur)
  }
};

/**
* @param {number} left
* @param {number} right
* @return {number}
*/


NumArray.prototype.sumRange = function(left, right) {
  let rightSum = this.prefix[right];
  let leftSum;
  if (left > 0) {
    leftSum = this.prefix[left -1]
  } else {
    leftSum =0
  }
  return rightSum - leftSum
};

/**
* Your NumArray object will be instantiated and called as such:
* var obj = new NumArray(nums)
* var param_1 = obj.sumRange(left,right)
*/


module.exports = NumArray