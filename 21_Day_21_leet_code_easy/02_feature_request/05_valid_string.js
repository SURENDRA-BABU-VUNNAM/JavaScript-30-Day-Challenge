
function valid_parenthis(str) {
    const stack = [];
    const bracket_map = {
      "(": ")",
      "{": "}",
      "[": "]",
    };
  
    for (let char of str) {
      if (bracket_map[char]) {
        stack.push(char);
      } else {
        if (stack.length === 0 || bracket_map[stack.pop()] !== char) {
          return false; 
        }
      }
    }
  
    return stack.length === 0;
  }
  
  let string = "{{]}"
  console.log(valid_parenthis(string));