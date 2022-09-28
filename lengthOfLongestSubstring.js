/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
  let longest = 0;
  let lastPosition = new Map();
  for (let l = 0, r = 0; r < s.length; r++) {
      if (lastPosition.has(s.charAt(r)) && lastPosition.get(s.charAt(r)) >= l) {
          l = lastPosition.get(s.charAt(r)) + 1;
      }
      longest = (r - l + 1 > longest) ? r - l + 1 : longest;
      lastPosition.set(s.charAt(r), r);
  }
  return longest;
};