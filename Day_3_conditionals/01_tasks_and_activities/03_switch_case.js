// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

let day = null

switch (day) {
  case 1 :
    console.log("monday");
    break;
  case 2 :
    console.log("tuesday");
    break;
  case 3 :
    console.log("wednesday");
    break;
  case 4 :
    console.log("thursday");
    break;
  case 5 :
    console.log("friday");
    break;
  case 6 :
    console.log("saturday");
    break;
  case 7 :
    console.log("sunday");
    break;
  default :
    console.log("enter a positive integer between 1 to 7")
}

//Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.

let score = 85

switch (score) {
  case score >= 90 :
    console.log("A");
    break;
  case score >= 80 :
    console.log("B");
    break;
  case score >= 70 :
    console.log("c")
  case score >= 60 :
    console.log("D")
  case score >= 50 :
    console.log("E")
  default :
    console.log("F")
}