const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((x) => x.trim());
const T = input.shift();
const set = new Set();

for (const item of input) {
  if (!set.has(item)) set.add(item);
  else set.delete(item);
}

console.log(...set);
