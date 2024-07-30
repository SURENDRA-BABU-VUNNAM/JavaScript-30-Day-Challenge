//  Write a script that counts character occurrences and finds the longest substring without repeating characters.

let count_char = function (str) {
  let char_count = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if(char_count[char]){
      char_count[char]++
    } else {
      char_count[char] = 1
    }
  }
  return char_count;
};

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