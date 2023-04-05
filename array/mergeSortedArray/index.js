/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */


const merge = function(nums1, m, nums2, n) {
  let i = 0;
  for (i; i<n; i++, m++) {
      nums1[m] = nums2[i]
  }
  return nums1 = nums1.sort((a,b) => a-b)
};

module.exports = merge