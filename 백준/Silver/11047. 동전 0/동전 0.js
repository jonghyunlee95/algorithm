const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
let [T, won] = input
  .shift()
  .split(' ')
  .map((x) => +x);
const coin = input.map((x) => +x).sort((a, b) => b - a);
let sum = 0;

for (let i = 0; i < T; i++) {
  if (won < coin[i]) {
    continue;
  } else {
    const change = Math.floor(won / coin[i]);
    won -= change * coin[i];
    sum += change;

    if (won === 0) {
      break;
    }
  }
}

console.log(sum);
