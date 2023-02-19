const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = +require('fs').readFileSync(filePath).toString();
const arr = [];
for (let i = input; i >= 1; i--) {
  arr.push(' '.repeat(input - i) + '*'.repeat(2 * i - 1));
}
const arr1 = [...arr];
const arr2 = [...arr.reverse()];
arr2.shift();
arr1.push(...arr2);
console.log(arr1.join('\n'));
