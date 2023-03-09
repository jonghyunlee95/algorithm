const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [T, ...input] = require('fs').readFileSync(filePath).toString().trim().split('\n');
let str = input.shift();
let answer = [];

for (let i = 0; i < str.length; i++) {
  for (let j = 0; j < input.length; j++) {
    const temp = str[i];
    if (temp !== input[j][i]) {
      answer.push('?');
      break;
    } else {
      if (j === input.length - 1) answer.push(temp);
    }
  }
}

if (answer.length === 0) answer.push(str);

console.log(answer.join(''));
