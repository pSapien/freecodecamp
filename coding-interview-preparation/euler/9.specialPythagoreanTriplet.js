/**
 @url https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-9-special-pythagorean-triplet
 A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2

For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc such that a + b + c = n.
*/

function specialPythagoreanTriplet(n) {
  for (let a = 3; a < n; a++) {
    for (let b = a + 1; b < n; b++) {
      const c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
      if (a + b + c === n) return a * b * c;
    }
  }
}

console.log(specialPythagoreanTriplet(24)) // number
console.log(specialPythagoreanTriplet(24)) // 480
console.log(specialPythagoreanTriplet(120)) // 60000
console.log(specialPythagoreanTriplet(1000)) // 31875000