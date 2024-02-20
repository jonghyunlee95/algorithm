const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');
let n = +input[0];
let nums = input[1].split(' ').map(Number);

nums.reverse();

let arr = [0];

for (x of nums) {
  if (arr[arr.length - 1] < x) arr.push(x);
  else {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
      mid = parseInt((left + right) / 2);

      if (arr[mid] >= x) right = mid;
      else left = mid + 1;
    }

    arr[right] = x;
  }
}

console.log(n - (arr.length - 1));
