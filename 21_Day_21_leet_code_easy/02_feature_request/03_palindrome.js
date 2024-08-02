
function palindrome(int) {
    let number = int;
  
    if (int < 0) {
      return false;
    }
    let reverse = 0;
    while (number > 0) {
      reverse = reverse * 10 + (number % 10);
      number = Math.floor(number / 10);
    }
  
    if (reverse === int) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(palindrome(-321));
  console.log(palindrome(121));
  console.log(palindrome(-1221));