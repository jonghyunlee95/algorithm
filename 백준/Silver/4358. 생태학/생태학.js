const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n').sort();
const map = new Map();

for (const item of input) {
  if (!map.has(item.trim())) map.set(item.trim(), 1);
  else map.set(item.trim(), map.get(item.trim()) + 1);
}

const answer = [];

for (let [key, value] of map) {
  answer.push(`${key} ${((value / input.length) * 100).toFixed(4)}`);
}

console.log(answer.join('\n'));
