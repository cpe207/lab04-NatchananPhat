function primeNumber(a) {
  if (a <= 1){
    return "NO"
  }
  if (a == 2 | a == 3){
    return "YES"
  }
  if (a % 2 == 0 | a % 3 == 0){
    return "NO"
  }
  for (let i = 5; i * i <= a; i += 6) {
    if (a % i == 0 | a % (i + 2) == 0){
      return "NO"
    }
  }
  return "YES"
}

const d1 = 10;
const d2 = 29;
const d3 = 2;

console.log(primeNumber(d1));
console.log(primeNumber(d2));
console.log(primeNumber(d3));

module.exports = primeNumber;
