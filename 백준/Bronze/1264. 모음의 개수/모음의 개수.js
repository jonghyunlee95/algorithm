const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

let answer = 0;

for (let i = 0; i < input.length - 1; i++) {
  for (let j = 0; j < input[i].length; j++) {
    if (
      input[i][j].toUpperCase() === 'A' ||
      input[i][j].toUpperCase() === 'E' ||
      input[i][j].toUpperCase() === 'I' ||
      input[i][j].toUpperCase() === 'O' ||
      input[i][j].toUpperCase() === 'U'
    )
      answer++;
  }
  console.log(answer);
  answer = 0;
}
