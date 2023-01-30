const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [T, ...input] = require('fs').readFileSync(filePath).toString().trim().split('\n');

input = input.map((x) => x.split(' ')).sort((a, b) => a[0] - b[0]);

for (let i = 0; i < T; i++) {
  console.log(input[i].join(' '));
}
