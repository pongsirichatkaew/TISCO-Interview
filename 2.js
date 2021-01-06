function isPerfectNumber(num) {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      sum = sum + i;
    }
  }

  if (sum === num) {
    return "perfect";
  } else if (sum < num) {
    return "deficient";
  } else {
    return "abundant";
  }
}

console.log(isPerfectNumber(15));
console.log(isPerfectNumber(18));
console.log(isPerfectNumber(6));
