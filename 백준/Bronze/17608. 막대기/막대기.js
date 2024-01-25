const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const [num, ...stick] = input;
const stack = [stick[stick.length - 1]];

for (let i = num - 1; i >= 0; i--) {
  if (stack[stack.length - 1] < stick[i]) stack.push(stick[i]);
}
console.log(stack.length);
