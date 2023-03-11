const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
let cnt = 0;

for (let i = 0; i < input.length; i++) {
  if (i === 0 || i % 2 === 0) {
    for (let j = 0; j < input[i].length; j += 2) {
      if (input[i][j] === 'F') cnt++;
    }
  } else {
    for (let j = 1; j < input[i].length; j += 2) {
      if (input[i][j] === 'F') cnt++;
    }
  }
}

console.log(cnt);
