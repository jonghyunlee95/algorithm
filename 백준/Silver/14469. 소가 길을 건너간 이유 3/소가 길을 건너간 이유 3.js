let input = require('fs')
  .readFileSync(0)
  .toString()
  .trim()
  .split('\n');
const N = Number(input.shift());
input = input.map((a) => a.split(' ').map(Number));
input = input.sort((a, b) => a[0] - b[0]);
let time = 0;
input.forEach((list, i) => {
  const [arrived, delay] = list;
  if (i === 0) time = arrived + delay;
  else {
    time = Math.max(arrived, time) + delay;
  }
});
console.log(time);