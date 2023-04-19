/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = function(nums1, nums2) {
  let numSet1 = new Set(nums1);
  let numSet2 = new Set(nums2);
  const resultArray = new Set([...numSet1].filter((x) => numSet2.has(x)));

  return [...resultArray]
};

module.exports = intersection