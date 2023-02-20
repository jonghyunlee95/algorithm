const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = +require('fs').readFileSync(filePath).toString().trim();
const arr = [0, 1];

for (let i = 2; i <= input; i++) {
  const num1 = arr[arr.length - 2];
  const num2 = arr[arr.length - 1];
  arr[i] = num1 + num2;
}
console.log(arr[arr.length - 1]);
