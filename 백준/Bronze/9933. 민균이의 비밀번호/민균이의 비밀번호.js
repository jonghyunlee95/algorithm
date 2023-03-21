const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((x) => x.trim());
const T = +input.shift();
const set = new Set(input);
const answer = [];

for (const item of input) {
  const arr = item.split('').reverse();

  if (set.has(arr.join(''))) {
    answer.push(item.length);
    answer.push(item[Math.floor(item.length / 2)]);
    break;
  }
}

console.log(answer.join(' '));
