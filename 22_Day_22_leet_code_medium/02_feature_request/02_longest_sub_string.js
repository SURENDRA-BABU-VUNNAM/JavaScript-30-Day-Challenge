// Create a script that includes a function to find the longest substring without repeating characters and logs the length.

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