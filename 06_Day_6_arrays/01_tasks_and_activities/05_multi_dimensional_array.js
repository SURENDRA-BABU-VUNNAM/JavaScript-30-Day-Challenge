// Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.

let matrix_2d = [];

for (let i = 0; i < 3; i++){
  matrix_2d[i] = [];
  for (let j = 0; j < 3; j++){
    matrix_2d[i][j] = i * 3 + j + 1;
  }
}

console.log(matrix_2d);

// Task 13: Access and log a specific element from the two-dimensional array.

let access_element = matrix_2d[2][2];

console.log(access_element);
