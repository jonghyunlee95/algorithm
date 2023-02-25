const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((x) => x.split(' ').map((x) => +x));
const T = input.shift();
const basket = [];

for (let i = 1; i <= T[0]; i++) {
  basket.push(i);
}

for (let i = 0; i < T[1]; i++) {
  const begin = input[i][0] - 1;
  const end = input[i][1] - 1;
  const mid = input[i][2] - 1;
  const arr1 = [];
  const arr2 = [];
    
  for (let j = mid; j <= end; j++) {
    arr1.push(basket[j]);
  }
  for (let k = begin; k < mid; k++) {
    arr2.push(basket[k]);
  }
    
  basket.splice(mid, end - mid + 1, ...arr2);
  basket.splice(begin, mid - begin, ...arr1);
}

console.log(basket.join(' '));
