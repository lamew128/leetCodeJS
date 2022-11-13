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
        if (map.has(diff)) {
            return [i, map.get(diff)];
        } else {
            map.set(nums[i], i);
        }
    }
    return null;
};