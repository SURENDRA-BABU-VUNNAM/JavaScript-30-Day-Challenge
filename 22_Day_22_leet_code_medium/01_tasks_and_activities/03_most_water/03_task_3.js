// Task 3: Solve the "Container With Most Water" problem on LeetCode.

// Write a function that takes an array of non-negative integers where each integer represents the height of a line drawn at each point. Find two lines that together with the x-axis form a container, such that the container holds the most water.

// Log the maximum amount of water for a few test cases.

function max_height(array) {
    let left = 0
    let right = array.length - 1
    let max_area = 0
    while (left < right) {
        let width = right - left
        let min_height = Math.min(array[left], array[right])
        let area = width * min_height
        max_area = Math.max(max_area, area)
        
        if (array[left] < array[right]) {
            left++;
        } else {
            right--;
        }

    }
    return max_area
}

let arr = [10,20,30,40]
console.log(max_height(arr));
