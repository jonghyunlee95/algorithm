const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim();
const set = new Set();

for (let i = 0; i < input.length; i++) {
  for (let j = i; j < input.length; j++) {
    set.add(input.slice(i, j + 1));
  }
}

console.log(set.size);
