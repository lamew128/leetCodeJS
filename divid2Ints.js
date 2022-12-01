/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
 var divide = function(dividend, divisor) {
  const negative = (divisor > 0 && dividend > 0 || divisor < 0 && dividend < 0) ? false : true; //check negative
  
  if (Math.abs(divisor) === 1) { //edge case: return the dividend if divisor = 1
      if(!negative) {
          return Math.abs(dividend) >= Math.pow(2,31) ? Math.pow(2,31) - 1 : Math.abs(dividend);
      } else {
          return -Math.abs(dividend);
      }
  }
  
  let ans = 0;
  let absDividend = Math.abs(dividend);
  const absDivisor = Math.abs(divisor);
  
  while (absDividend >= absDivisor) {
      let temp = absDivisor;
      let count = 1;
      while (temp <= absDividend) {
          temp <<= 1;
          count <<= 1;
      }
      ans += (count >> 1);
      absDividend -= (temp >> 1);
  }
  
  ans = negative ? -ans : ans;
  
  if (ans >= Math.pow(2,31)) { //int max
    ans = Math.pow(2,31) - 1;
  }
  
  return ans;
};