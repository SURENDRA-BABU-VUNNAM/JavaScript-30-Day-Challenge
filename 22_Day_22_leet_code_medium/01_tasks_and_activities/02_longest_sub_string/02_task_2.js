// Task 2: Solve the "Longest Substring Without Repeating Characters" problem on LeetCode.

// Write a function that takes a string and returns the length of the longest substring without repeating characters.

// Log the length for a few test cases, including edge cases.

function longest_substring(str) {
    let char_set = new Set()
    let left = 0
    let max_length = 0
    let max_substring = ""
    
    for (let right = 0; right <= (str.length - 1); right++){
        while (char_set.has(str[right])) {
            char_set.delete(str[left])
            left++
        }
        char_set.add(str[right])
        if (right-left+1 > max_length) {
            max_length = Math.max(max_length, right - left + 1);
            max_substring = str.substring(left,right+1)
        }
    }
    console.log(max_substring)
    return max_length
}

console.log(longest_substring("surendra"))
