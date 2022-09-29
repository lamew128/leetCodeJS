/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
  if (s.length < 2) {
      return false;
  }
  let stack = [];
  let parentheses = new Map();
  parentheses.set(')', '(');
  parentheses.set(']', '[');
  parentheses.set('}', '{');
  
  for (let i = 0; i < s.length; i++) {
      if (s.charAt(i) === '(' || s.charAt(i) === '[' || s.charAt(i) === '{') {
          stack.push(s.charAt(i));
      }
      else if (parentheses.get(s.charAt(i)) === stack[stack.length - 1]) {
          stack.pop();
      } else {
          return false;
      }
  }
  
  return stack.length === 0 ? true : false;
};