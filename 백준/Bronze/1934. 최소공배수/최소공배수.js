const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [T, ...input] = require('fs').readFileSync(filePath).toString().trim().split('\n');

function gcd(a, b) {
  const remainder = a % b;
  if (remainder === 0) return b;
  return gcd(b, remainder);
}

for (let i = 0; i < T; i++) {
  const arr = input[i].split(' ').map((x) => +x);

  console.log((arr[0] * arr[1]) / gcd(arr[0], arr[1]));
}
