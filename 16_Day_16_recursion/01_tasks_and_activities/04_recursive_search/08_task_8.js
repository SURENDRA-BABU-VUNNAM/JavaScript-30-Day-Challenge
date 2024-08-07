// Task 8: Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.

function count_occurrences(arr, target,index=0,count=0) {
    if (index >= arr.length) {
        return count
    }

    if (arr[index]=== target) {
        count++
    }
    return count_occurrences(arr, target,index+1,count)
}

const arr1 = [1, 2, 2, 3, 2, 4, 2];
console.log(count_occurrences(arr1, 2))