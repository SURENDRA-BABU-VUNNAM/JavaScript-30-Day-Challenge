// Write a script that checks if a year is a leap year using multiple conditions and logs the result.

let year = prompt("enter a year");

year = Number(year);

if (isNaN(year)) {
  alert("enter a valid year");
} else if (year === 0) {
  alert("year 0000 is not a well defined year in gregorian calender");
} else if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log("the year is leap year");
} else {
  console.log("year is not a leap year");
}
