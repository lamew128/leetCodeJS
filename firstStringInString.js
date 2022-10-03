/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
      for (let j = 0; j <= needle.length; j++) {
          if (j === needle.length) {
              return i;
          }

          if (needle.charAt(j) !== haystack.charAt(i + j)) {
              break;
          }
      }
  }
  return -1;
};