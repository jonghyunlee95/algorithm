const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((x) => x.trim());
const T = input.shift().split(' ');
const submitNum = +T[0];
const game = T[1];
const set = new Set();

for (let i = 0; i < submitNum; i++) {
  set.add(input[i]);
}

if (game === 'F') {
  console.log(Math.floor(set.size / 2));
} else if (game === 'O') {
  console.log(Math.floor(set.size / 3));
} else {
  console.log(set.size);
}
