const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((x) => x.trim().split(' ').map(Number));
input.pop();

for (let i = 0; i < input.length; i++) {
  if (input[i][0] > input[i][1]) console.log('Yes');
  else console.log('No');
}
