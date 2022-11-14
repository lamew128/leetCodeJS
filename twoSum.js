/*
Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    if (nums.length === 2) {
        return [0,1];
    }
    let map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];//the different between target and the current number(the number we needed)
        if (map.has(diff)) { //check the map if the number we need existed
            return [i, map.get(diff)];
        } else {
            map.set(nums[i], i);//assign the current number to the current position in the map
        }
    }
    return null;
};