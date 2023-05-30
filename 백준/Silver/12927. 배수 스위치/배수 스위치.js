const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('');
let answer = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i] === 'Y') {
    const num = i + 1;
    for (let k = num; k <= input.length; k += num) {
      if (input[k - 1] === 'N') input[k - 1] = 'Y';
      else input[k - 1] = 'N';
    }
    input[i] = 'N';
    answer++;
  }
}

console.log(answer);
