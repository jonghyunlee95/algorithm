const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(' ').join('');

const ascding = '12345678';
const descending = '87654321';

if (input === ascding) console.log('ascending');
else if (input === descending) console.log('descending');
else console.log('mixed');
