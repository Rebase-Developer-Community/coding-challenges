/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

  function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
    }

  const sortedArrayToBST = function(nums) {
    function t(a,b) {
      let node = new TreeNode();
      let mid = Math.ceil((b+a)/2)
      node.val =  nums[mid];
      node.left = a === mid ? null : t(a,mid-1);
      node.right = b === mid ? null : t(mid +1, b)
      console.log('node',node)
      return node
    }
    let length = nums.length;
    return length ? t(0,length-1) : null;
  };

module.exports = sortedArrayToBST