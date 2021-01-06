function isNumberValid(num1, num2) {
  const numArr1 = Array.from(num1.toString());
  const numArr2 = Array.from(num2.toString());
  for (const n in numArr1) {
    if (numArr1[n] === numArr2[n]) {
      return `InValid`;
    }
  }
  return `Valid`;
}

console.log(isNumberValid(9876543, 3467985));
console.log(isNumberValid(9876543, 7865439));
console.log(isNumberValid(9876543, 8743956));
console.log(isNumberValid(9876543, 3456789));
