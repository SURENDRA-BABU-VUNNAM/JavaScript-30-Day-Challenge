// Write a script that iterates over an array using both for loop and forEach method and logs each element.

let marvel_heors = [
  "iron man",
  "captain america",
  "black widow",
  "hulk",
  "thor",
];

// for loop

for (let i = 0; i < marvel_heors.length; i++) {
  console.log(marvel_heors[i]);
}

// for each

marvel_heors.forEach(function (e) {
  console.log(`the hero is ${e}`);
});
