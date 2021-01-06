function syracuseResult(num) {
  let arr = [num];
  while (num !== 1) {
    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num = num * 3 + 1;
    }
    arr.push(num);
  }
  return arr;
}

console.log(syracuseResult(5));
