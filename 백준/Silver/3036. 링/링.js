const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [T, ...input] = require('fs').readFileSync(filePath).toString().trim().split('\n');
const circle = input[0].split(' ').map((x) => +x);

function gcd(a, b) {
  const remainder = a % b;
  if (remainder === 0) return b;
  return gcd(b, remainder);
}

for (let i = 1; i < circle.length; i++) {
  console.log(`${circle[0] / gcd(circle[0], circle[i])}/${circle[i] / gcd(circle[0], circle[i])}`);
}
