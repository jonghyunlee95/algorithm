const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [T, ...input] = require('fs').readFileSync(filePath).toString().trim().split('\n');
const arr = T.split(' ').map(Number);
const length = arr[0];
const can = arr[1];
const table = input[0].split('');
let answer = 0;

for (let i = 0; i < length; i++) {
  if (table[i] === 'P') {
    const start = i - can;
    const end = i + can;

    for (let j = start; j <= end; j++) {
      if (table[j] === 'H') {
        answer += 1;
        table[j] = 'D';
        break;
      }
    }
  }
}

console.log(answer);
