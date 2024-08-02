// Task 5 :  Solve the "Valid Parentheses" problem on LeetCode.
// Write a function that takes a string containing just the characters '(', ')', '{', '}', '[' and ']', and determines if the input string is valid.
// A string is valid if open brackets are closed in the correct order.
// Log the result for a few test cases.

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

let string = "{{]}";
console.log(valid_parenthis(string));
