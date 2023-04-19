const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const T = +input.shift();
const arr = input.map((x) => x.split(' ').map(Number));
const answer = [];

function lcm(a, b) {
  let num = 1;

  while (true) {
    if (num % a === 0 && num % b === 0) break;
    num++;
  }

  return num;
}

function gcd(a, b) {
  const remainder = a % b;
  if (remainder === 0) return b;
  return gcd(b, remainder);
}

for (let i = 0; i < T; i++) {
  answer.push(`${lcm(arr[i][0], arr[i][1])} ${gcd(arr[i][0], arr[i][1])}`);
}

console.log(answer.join('\n'));
