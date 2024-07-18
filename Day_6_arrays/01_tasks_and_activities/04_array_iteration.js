// Task 10: Use a for loop to iterate over the array and log each element to the console.

let for_array = [10, 20, 30, 40, 50];

for (let i = 0; i < for_array.length; i++) {
  let element = for_array[i] + 5;
  console.log(element);
}

// Task 11: Use the forEach method to iterate over the array and log each element to the console.

for_array.forEach(function (e) {
  let result = e + 5;
  console.log(result);
});
