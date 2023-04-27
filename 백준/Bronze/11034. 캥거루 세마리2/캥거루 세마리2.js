const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((x) => x.split(' ').map(Number));

for (let i = 0; i < input.length; i++) {
  const arr = input[i];

  console.log(Math.max(arr[1] - arr[0], arr[2] - arr[1]) - 1);
}
