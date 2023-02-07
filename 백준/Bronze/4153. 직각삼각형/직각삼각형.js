const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((x) =>
    x
      .trim()
      .split(' ')
      .map((x) => +x)
  );
input.pop();
const answer = [];

for (let i = 0; i < input.length; i++) {
  input[i] = input[i].sort((a, b) => a - b);

  if (Math.pow(input[i][0], 2) + Math.pow(input[i][1], 2) === Math.pow(input[i][2], 2)) answer.push('right');
  else answer.push('wrong');
}

console.log(answer.join('\n'));
