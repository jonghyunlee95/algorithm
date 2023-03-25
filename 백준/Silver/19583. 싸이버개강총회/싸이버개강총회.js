const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const time = input.shift().split(' ');
const start = time[0].split(':');
const end = time[1].split(':');
const streamingEnd = time[2].split(':');
const set = new Set();
input = input.map((x) => x.split(' ').map((x) => x.split(':')));
let cnt = 0;

for (let i = 0; i < input.length; i++) {
  const user = input[i][1][0];
  const startTime = start[0] * 60 + +start[1];
  const endTime = end[0] * 60 + +end[1];
  const streamingEndTime = streamingEnd[0] * 60 + +streamingEnd[1];
  const chattingTime = input[i][0][0] * 60 + +input[i][0][1];

  if (startTime >= chattingTime) {
    set.add(user);
  }

  if (endTime <= chattingTime && streamingEndTime >= chattingTime && set.has(user)) {
    set.delete(user);
    cnt++;
  }
}

console.log(cnt);
