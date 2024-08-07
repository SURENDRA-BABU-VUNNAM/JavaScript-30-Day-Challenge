// : Write a script that includes a function to group anagrams and logs the grouped anagrams.

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
