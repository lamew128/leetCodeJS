/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
 var divide = function(dividend, divisor) {
    
  let ans = 0;
  let count = 0;
  const absDividend = Math.abs(dividend);
  const absDivisor = Math.abs(divisor);
  
  while(ans + absDivisor <= absDividend) {
      ans += absDivisor;
      count++;
  }
  
  count = (divisor > 0 && dividend > 0 || divisor < 0 && dividend < 0) ? count : -count;
  
  if(count >= Math.pow(2,31)) {
    count = Math.pow(2,31) - 1;
  }
  
  return count;
};