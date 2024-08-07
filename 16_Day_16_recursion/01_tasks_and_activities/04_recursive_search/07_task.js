//Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.

function binary_search(arr,target ,low =0, high = arr.length-1) {
    if (low > high) return `the element is not present`


    let mid = Math.floor((low + high) / 2)
    
    if (arr[mid] === target) {
        console.log(`Target ${target} found at index ${mid}`);
    } else if (arr[mid]<target) {
        return binary_search(arr,target,low=mid+1, high)
    } else {
        return binary_search(arr, target,low,high=mid-1)
    }
}

const arr = [1, 3, 5, 7, 9, 11, 13, 15];

binary_search(arr, 9)
