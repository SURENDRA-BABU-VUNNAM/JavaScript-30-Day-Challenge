// Create a script that uses a switch case to assign a grade based on a score and logs the grade.

let day = prompt("enter a day number 1 to 7 eg: 1 for monday")

day = Number(day)

switch (true){
  case isNaN(day) || day<=0 || day>7:
    alert("enter a valid name")
    console.log("nan li")
    break;
  default:
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
    }
} 
