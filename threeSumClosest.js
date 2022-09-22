/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var threeSumClosest = function(nums, target) {
    
  let closest = nums[0] + nums[1] + nums[2];
  let range = Math.abs(closest - target);
  nums.sort((a, b) => a - b);
  
  for (let i = 0; i < nums.length; i++) {
      if (!(i > 0 && nums[i] == nums[i - 1])) { //if the current num does not equal to the pervious one
          let l = i + 1; //left index = current index + 1
          let r = nums.length - 1; //right index = last
          
          while (l < r) {
              let sum = nums[i] + nums[l] + nums[r]; //sum up three numbers and check = 0
              if (sum > target) {
                  if (Math.abs(sum - target) < range) {
                      closest = sum;
                      range = Math.abs(sum - target);
                  }
                  r--;
              } else if (sum < target) {
                  if (Math.abs(target - sum) < range) {
                      closest = sum;
                      range = Math.abs(target - sum);
                  }
                  l++;
              } else {
                  return sum;
              }
          }
      }
  }
  
  return closest;
};