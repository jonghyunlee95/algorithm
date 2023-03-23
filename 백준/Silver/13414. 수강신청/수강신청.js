const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((x) => x.trim());
const T = input.shift().split(' ')[0];
const set = new Set();

for (let i = 0; i < input.length; i++) {
  if (set.has(input[i])) {
    set.delete(input[i]);
    set.add(input[i]);
  } else {
    set.add(input[i]);
  }
}
const answer = [...set].splice(0, T);

console.log(answer.join('\n'));
