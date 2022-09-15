/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
  let total = 0;
  for (let i = 0; i < s.length; i++) {
      switch(s.charAt(i)) {
          case 'I':
              (s.charAt(i+1) === 'V' || s.charAt(i+1) === 'X') ? total -= 1 : total += 1;
              break;
          case 'V':
              total += 5;
              break;
          case 'X':
              (s.charAt(i+1) === 'L' || s.charAt(i+1) === 'C') ? total -= 10 : total += 10;
              break;
          case 'L':
              total += 50;
              break;
          case 'C':
              (s.charAt(i+1) === 'D' || s.charAt(i+1) === 'M') ? total -= 100 : total += 100;
              break;
          case 'D':
              total += 500;
              break;
          case 'M':
              total += 1000;
              break;
          default:
              break;
      }
  }
  return total;
};