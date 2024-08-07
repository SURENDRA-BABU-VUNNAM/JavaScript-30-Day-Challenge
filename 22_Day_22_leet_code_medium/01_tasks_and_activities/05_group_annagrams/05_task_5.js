// Task 5 :  Solve the "Group Anagrams" problem on LeetCode.
// Write a function that takes an array of strings and groups anagrams together.
// Log the grouped anagrams for a few test cases.


function group_anagrams(strs) {
    let anagrams = {};
    for (let word of strs) {
        let sortedWord = [...word].sort().join("");
        if (!anagrams[sortedWord]) {
            anagrams[sortedWord] = [];
        }
        anagrams[sortedWord].push(word);
    }
    return Object.values(anagrams);
}

// Test cases
console.log(group_anagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(group_anagrams(["hi", "ih", "ho", "oh"]));
console.log(group_anagrams(["omg", "lmao", "rofl", "omg", "lmao", "omg"]));
