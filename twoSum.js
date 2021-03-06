/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
  if (nums.length === 2) {
      return [0,1];
  }
  
  for (let i = 0; i < nums.length; i++) {
      let diff = target - nums[i];
      if (nums.includes(diff) && nums.indexOf(diff) !== i) {
          return [i, nums.indexOf(diff)];
      }
  }
  return null;
};