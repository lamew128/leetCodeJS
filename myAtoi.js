/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {
  s = s.trim();
  let negative = false;
  let current = 0;
  let result = 0;
  if (s.charAt(0) === "-") {
      negative = true;
      current = 1;
  } else if(s.charAt(0) === "+") {
      current = 1;
  }
  
  for (let i = current; i < s.length; i++) {
      
      if(s.charAt(i) < '0' || s.charAt(i) > '9') {
          break;
      }
      
      result = result * 10 + parseInt(s.charAt(i));
  }
  
  result = negative ? result * -1 : result;
  
  if(result >= Math.pow(2,31)) {
      result = Math.pow(2,31) - 1;
  }
  
  if(result <= Math.pow(-2,31)) {
      result = Math.pow(-2,31);
  }
  
  return result;
};