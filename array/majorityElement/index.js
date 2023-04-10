/**
 * @param {number[]} nums
 * @return {number}
 */


const majorityElement = function(nums) {
  const hash = {};
  nums.forEach(element => {
    if (hash.hasOwnProperty(element)) {
      hash[element] +=1
    }else {
      hash[element] =1
    }
  });
  return Object.entries(hash)
  .filter(ele => ele[1] > Math.floor(nums.length /2))
  .map(ele => +ele[0])
  .sort((a,b) => b -a)[0];
};

module.exports = majorityElement