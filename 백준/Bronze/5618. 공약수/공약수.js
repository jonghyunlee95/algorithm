const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const T = +input.shift();
const nums = input[0].split(' ').map(Number);

function same(num) {
  const result = [];

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) result.push(i);
  }

  return result;
}

function gcd(a, b) {
  const remainder = a % b;
  if (remainder === 0) return b;
  return gcd(b, remainder);
}

if (nums.length === 2) {
  console.log(
    same(gcd(nums[0], nums[1]))
      .sort((a, b) => a - b)
      .join('\n')
  );
} else if (nums.length === 3) {
  const number = gcd(nums[0], nums[1]);
  console.log(
    same(gcd(number, nums[2]))
      .sort((a, b) => a - b)
      .join('\n')
  );
}
