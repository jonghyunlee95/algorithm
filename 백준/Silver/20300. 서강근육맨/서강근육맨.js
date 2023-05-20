const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [n, ...input] = require('fs').readFileSync(filePath).toString().trim().split('\n');
input = input[0].split(' ').map(BigInt);
input.sort((a, b) => (a < b ? -1 : 1));

let maxHealth = -1;

if (n % 2 != 0) {
  let lastHealth = input.pop();
  while (input.length) {
    let lossMuscle = input.shift() + input.pop();
    if (maxHealth < lossMuscle) {
      maxHealth = lossMuscle;
    }
  }
  if (maxHealth < lastHealth) {
    maxHealth = lastHealth;
  }
} else {
  while (input.length) {
    let lossMuscle = input.shift() + input.pop();
    if (maxHealth < lossMuscle) {
      maxHealth = lossMuscle;
    }
  }
}

console.log(String(maxHealth));
