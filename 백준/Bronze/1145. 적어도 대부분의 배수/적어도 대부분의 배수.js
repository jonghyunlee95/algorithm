const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);
const answer = [];

function lcm(a, b, c) {
  let num = 1;

  while (true) {
    if (num % a === 0 && num % b === 0 && num % c === 0) break;
    num++;
  }

  return num;
}

for (let i = 0; i < input.length - 2; i++) {
  for (let j = i + 1; j < input.length - 1; j++) {
    for (let k = j + 1; k < input.length; k++) {
      answer.push(lcm(input[i], input[j], input[k]));
    }
  }
}

console.log(Math.min(...answer));
