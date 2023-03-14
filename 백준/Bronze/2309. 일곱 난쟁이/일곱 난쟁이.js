const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((x) => +x)
  .sort((a, b) => a - b);

for (let i = 0; i < input.length - 1; i++) {
  for (let j = i + 1; j < input.length; j++) {
    let sum = 0;
    for (let k = 0; k < input.length; k++) {
      sum += input[k];
    }
    sum = sum - (input[i] + input[j]);
    if (sum === 100) {
      const short1 = input[i];
      const short2 = input[j];

      input.splice(input.indexOf(short1), 1);
      input.splice(input.indexOf(short2), 1);
      console.log(input.join('\n'));
    }
  }
}
