// Write a script that includes a function to find the container with the most water and logs the maximum amount of water.

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
