const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((x) => x.trim());
const T = +input.shift();
const In = input.splice(0, T);
const Out = input;
let count = 0;

while (Out.length) {
  if (In[0] !== Out[0]) {
    In.splice(In.indexOf(Out[0]), 1);
    Out.shift();
    count++;
  } else {
    In.shift();
    Out.shift();
  }
}

console.log(count);
