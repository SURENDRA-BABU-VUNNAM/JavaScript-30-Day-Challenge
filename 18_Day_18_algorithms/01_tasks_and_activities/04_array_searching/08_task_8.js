// Task 8: Write a function to rotate an array by k positions. Log the rotated array.

function rotate_array(arr, k) {

  for (let i = 0; i < k; i++) {
      const element = arr.shift(); 
      arr.push(element); 
  }

  console.log(arr); 
}


const array = [10, 20, 30, 40, 50, 60, 70];
const k = 3;
rotate_array(array, k); 