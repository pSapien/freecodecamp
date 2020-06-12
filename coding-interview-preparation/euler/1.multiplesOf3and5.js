const isMultipleOf3or5 = v => v % 3 === 0 || v % 5 === 0;

function multiplesOf3and5(number) {
  let sum = 0;

  for (let i = 0; i < number; i++) {
    if (isMultipleOf3or5(i)) sum += i;
  }

  return sum;
}

console.log(multiplesOf3and5(10));
console.log(multiplesOf3and5(0));
