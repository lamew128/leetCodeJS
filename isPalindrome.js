/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
  if (x < 0) {
      return false;
  };
  return ("" + x) === ("" + x).split("").reverse().join("");
};