// Write a script that demonstrates iterating over an object's properties using a for...in loop. and Object.keys/Object.values

let book = {
  title: "Harry Potter",
  author: "J.K Rowling",
  year: 1997,
};

for (let key in book) {
  console.log(`${key} : ${book[key]}`);
}

let keys = Object.keys(book);
let values = Object.values(book);

keys.map(function (e, i){
  console.log(`the value of key${i} is ${e} `);
})

values.map(function(e, i){
  console.log(`the value of value${i} is ${e} `);
})

