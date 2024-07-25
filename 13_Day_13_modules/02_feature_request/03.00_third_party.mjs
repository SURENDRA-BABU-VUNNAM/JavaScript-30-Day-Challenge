//  Create a script demonstrating how to bundle JavaScript files using a module bundler (optional).

import chunk from "lodash/chunk.js"
import axios from "axios"

const array = [1, 2, 3, 4, 5];
const chunkedArray = chunk(array, 2);
console.log(chunkedArray); // Output: [[1, 2], [3, 4], [5]]

axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });