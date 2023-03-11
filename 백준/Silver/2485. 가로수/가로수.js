const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((x) => +x);
const T = input.shift();
const distance = [];

function gcd(a, b) {
  const remainder = a % b;
  if (remainder === 0) return b;
  return gcd(b, remainder);
}

for (let i = 0; i < T - 1; i++) {
  distance.push(input[i + 1] - input[i]);
}

let max = gcd(distance[0], distance[1]);

for (let i = 2; i < distance.length; i++) {
  max = gcd(max, distance[i]);
}

let sum = 0;
for (let i = 0; i < distance.length; i++) {
  sum += distance[i] / max - 1;
}

console.log(sum);
