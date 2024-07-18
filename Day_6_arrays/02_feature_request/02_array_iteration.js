//  Create a script that uses map, filter, and reduce methods to transform and aggregate array data.

let array = [10, 20, 30, 40, 50];

let map_array = array.map(function (e) {
  return e * 3;
});

console.log(map_array);

let filter_array = array.filter(function (e) {
  return e < 35;
});

console.log(filter_array);

let reduce_array = array.reduce(function (acc, curr) {
  return acc + curr;
}, 0);

console.log(reduce_array);
