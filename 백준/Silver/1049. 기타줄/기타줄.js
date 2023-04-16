const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((x) => x.split(' ').map(Number));
let [need, brand] = input.shift();
const set = [];
const single = [];
const cost = [];

for (let i = 0; i < brand; i++) {
  set.push(input[i][0]);
  single.push(input[i][1]);
}

if (need % 6 !== 0) {
  cost.push((Math.floor(need / 6) + 1) * Math.min(...set));
} else {
  cost.push(Math.floor(need / 6) * Math.min(...set));
}

const setPrice = Math.floor(need / 6) * Math.min(...set);
const singlePrice = (need - Math.floor(need / 6) * 6) * Math.min(...single);
cost.push(setPrice + singlePrice);

cost.push(need * Math.min(...single));

console.log(Math.min(...cost));
