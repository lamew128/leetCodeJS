/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
  let result = 0;
  let negative = x < 0 ? true : false;
  if(negative) {
      x *= -1;
  }
  while(x !== 0){
      let y = x % 10;
      x = Math.floor(x / 10);
      
      result = result * 10 + y;
  }
  if(negative) {
      result *= -1;
  }
  
  if(result > Math.pow(2,31) || result < Math.pow(-2, 31)) {
      return 0;
  }
  return result;
};