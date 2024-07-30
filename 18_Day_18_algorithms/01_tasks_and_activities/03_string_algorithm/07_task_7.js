// // Task 7 Write a function to find the longest substring without repeating characters in a string. Log the length of the substring

let longest_substring = function(str) {
  let longest = 0;
  let longest_str = "";
  let start = 0;
  let seen = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    if (i - start + 1 > longest) {
      longest = i - start + 1;
      longest_str = str.substring(start, i + 1);
    }
    seen[char] = i + 1;
  }
  return longest_str;
}

let str = "abcabcbb";
console.log(longest_substring(str));

