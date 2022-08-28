/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
    //find the length of the merged array to the middle index(s) 
    //e.g. [1,2] and [3,4] -> [1,2,3] -> median = (2 + 3) / 2
    //e.g. [1,2,5] and [3,4] -> [1,2,3] -> median = 3
    //odd = need 2 numbers , even = need 1 number
    const length = (nums1.length + nums2.length) % 2 === 0 ? ((nums1.length + nums2.length) / 2) + 1 : Math.ceil((nums1.length + nums2.length) / 2);

    let i1 = 0;
    let i2 = 0;
    const merged = [];
    while(merged.length < length) {
        if (nums1[i1] <= nums2[i2]) {
            if(nums1[i1] || nums1[i1] === 0) {
               merged.push(nums1[i1]); 
            }
            i1++;
        } else {
            if(nums2[i2] || nums2[i2] === 0) {
                merged.push(nums2[i2]);
            }
            i2++;
        }
        
        if (i1 > nums1.length - 1) {
            for (let j = i2; merged.length < length; j++) {
                merged.push(nums2[j]);
            }
            break;
        }
        
        if (i2 > nums2.length - 1) {
            for (let j = i1; merged.length < length; j++) {
                merged.push(nums1[j]);
            }
            break;
        }
    }
    //edge case 1: return the value if the array size === 1
    if(length === 1) {
        return merged[0];
    }
    if(length % 2 === 0 && nums1.length + nums2.length === 2) {
        return ((merged[merged.length - 1] + merged[merged.length - 2]) / 2);
    }

    return (nums1.length + nums2.length) % 2 !== 0 ?  merged[merged.length - 1] : ((merged[merged.length - 1] + merged[merged.length - 2]) / 2);
};