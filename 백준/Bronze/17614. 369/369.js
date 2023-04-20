const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = +require('fs').readFileSync(filePath).toString().trim();
let nums = [];

for (let i = 1; i <= input; i++) {
  nums.push(String(i).split(''));
}

nums = nums.filter((x) => x.includes('3') || x.includes('6') || x.includes('9'));
let cnt = 0;

for (let i = 0; i < nums.length; i++) {
  for (let j = 0; j < nums[i].length; j++) {
    if (nums[i][j] === '3' || nums[i][j] === '6' || nums[i][j] === '9') {
      cnt++;
    }
  }
}

console.log(cnt);
