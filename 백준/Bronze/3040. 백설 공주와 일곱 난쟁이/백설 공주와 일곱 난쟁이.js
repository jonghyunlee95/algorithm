const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((x) => +x);
const answer = [];
let sum = 0;

for (let i = 0; i < input.length; i++) {
  sum += input[i];
}

for (let i = 0; i < input.length - 1; i++) {
  for (let j = i + 1; j < input.length; j++) {
    const not = input[i] + input[j];

    if (sum - not === 100) {
      input = input.filter((x) => x !== input[i] && x !== input[j]);
    }
  }
}

console.log(input.join('\n'));
