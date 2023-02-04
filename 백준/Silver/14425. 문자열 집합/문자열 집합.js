const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [T, ...input] = require('fs').readFileSync(filePath).toString().split('\n');
const num1 = +T.split(' ')[0];
const num2 = +T.split(' ')[1];
const arr1 = input
  .splice(0, num1)
  .sort()
  .map((x) => x.trim());
const arr2 = input.sort().map((x) => x.trim());
let cnt = 0;

function binary(arr, el) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== el && start <= end) {
    if (el < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }

  if (arr[middle] === el) {
    return true;
  } else {
    return false;
  }
}

for (let i = 0; i < arr2.length; i++) {
  if (binary(arr1, arr2[i])) cnt++;
}
console.log(cnt);