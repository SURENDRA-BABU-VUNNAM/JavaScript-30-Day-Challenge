// Create a script that uses a switch case to assign a grade based on a score and logs the grade.

let score = prompt("enter a score between 0-100")

score = Number(score)

switch (true) {
  case isNaN(score)  || score>100:
    alert("enter a proper score from 0-100")
    break;
  default:
    switch (score) {
      case score >= 90 :
        console.log("A");
        break;
      case score >= 80 :
        console.log("B");
        break;
      case score >= 70 :
        console.log("c")
        break;
      case score >= 60 :
        console.log("D")
        break;
      case score >= 50 :
        console.log("E");
        break;
      default :
        console.log("F")
    }
    
}

