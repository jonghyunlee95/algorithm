const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim();

let answer = 10;
let temp = input[0];

for (let i = 1; i < input.length; i++) {
  if (temp === input[i]) answer += 5;
  else {
    temp = input[i];
    answer += 10;
  }
}

console.log(answer);
