const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

for (let i = 0; i < input.length; i++) {
    console.log(input[i]);
}