/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
/*
Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:        row = 
    P     I     N    0
    A   L S   I G    1
    Y A   H R        2
    P     I          3
*/


var convert = function(s, numRows) {
  if (numRows === 1) {
      return s;
  }
  let zig = "";
  let cycle = numRows + (numRows - 2);
  
  //i = current row
  for (let i = 0; i < numRows; i++) {
      //j = current cycle position
      for (let j = 0; j + i < s.length; j = j + cycle) {
          zig += s.charAt(j + i);//append the first char at the current cycle + row position
          //if not first row or last row, append the char
          //the char = next cycle first index(j + cycle) - current row(i)  
          if (i !== 0 && i !== numRows - 1 && j + cycle - i < s.length) {
              zig += s.charAt(j + cycle - i);
          }
      }
  }
  return zig;
};