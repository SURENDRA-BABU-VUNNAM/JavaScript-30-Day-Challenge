function reverse_integer(int) {
  let number = int;
  let negative;
  if (number < 0) {
    negative = true;
    number = -number;
  }
  if (number % 10 === 0) {
    for (let i = String(number).length - 1; i >= 0; i--) {
      number = number / 10;
      if (number % 10 !== 0) {
        break;
      }
    }
  }

  if (typeof number === "number") {
    number = String(number);
  }
  let reverse = "";
  for (let i = number.length - 1; i >= 0; i--) {
    reverse = reverse + number[i];
  }

  if (negative) {
    reverse = Number(reverse);
    return -reverse;
  } else {
    return reverse;
  }
}

console.log(reverse_integer(210));
