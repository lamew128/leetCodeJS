/**
 * @param {number} num
 * @return {string}
 */
 var intToRoman = function(num) {
  let roman = new Map();
  roman.set(1,    "I");
  roman.set(5,    "V");
  roman.set(10,   "X");
  roman.set(50,   "L");
  roman.set(100,  "C");
  roman.set(500,  "D");
  roman.set(1000, "M");
  
  let result = "";
  let power = 0;
  
  while (num > 0) {
      let remainder = num % 10;
      num = Math.floor(num / 10);
      let zeros = Math.pow(10, power);
      power++;
      
      switch(remainder) {
          case 1:
              result = roman.get(1 * zeros) + result;
              break;
          case 2:
              result = roman.get(1 * zeros) + roman.get(1 * zeros) + result;
              break;
          case 3:
              result = roman.get(1 * zeros) + roman.get(1 * zeros) + roman.get(1 * zeros) + result;
              break;
          case 4:
              result = roman.get(1 * zeros) + roman.get(5 * zeros) + result;
              break;
          case 5:
              result = roman.get(5 * zeros) + result;
              break;
          case 6:
              result = roman.get(5 * zeros) + roman.get(1 * zeros) + result;
              break;
          case 7:
              result = roman.get(5 * zeros) + roman.get(1 * zeros) + roman.get(1 * zeros) + result;
              break;
          case 8:
              result = roman.get(5 * zeros) + roman.get(1 * zeros) + roman.get(1 * zeros) + roman.get(1 * zeros) + result;
              break;
          case 9:
              result = roman.get(1 * zeros) + roman.get(1 * zeros * 10) + result;
              break;  
          default:
              break;
      }
  }
  
  return result;
};