// Task 6: Write a function to count the occurrences of each character in a string. Log the character counts.

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

let str = "hello";
console.log(count_char(str));
