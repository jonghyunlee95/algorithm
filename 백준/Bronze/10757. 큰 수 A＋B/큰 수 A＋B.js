const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split(' ').map(x => BigInt(x));
const answer = input[0] + input[1];

console.log(answer.toString());