const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(' ');

function gcd(a, b) {
  const remainder = a % b;
  if (remainder === 0) return b;
  return gcd(b, remainder);
}

console.log((+input[0] * +input[1]) / gcd(+input[0], +input[1]));
