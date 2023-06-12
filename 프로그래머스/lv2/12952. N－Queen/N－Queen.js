// 레벨은 2로되어있는데 왜 체감은 레벨 4죠....?😭😭😭
// 문제를 이해하는데에도 너무 많은 시간이 걸려서 검색의 힘을 빌렸습니다..
// 문제해결보다는 로직에 대한 이해를 한다고 생각하고 해설을 긁어왔습니다.
function solution(n) {
  let answer = 0;
	// 입력 받은 n만큼의 1차원 배열을 만들고 방문하지 않았다는 의미로 상수를 넣어줍니다.  
  const NOT_VISITED = 100;
  const status = Array(n).fill(NOT_VISITED);

  const isAvailable = (status, row, col) => {
		// 이미 방문한 노드라면 함수의 실행을 종료합니다.
    if (status[col] !== NOT_VISITED) return false;
		// 방문하지 않은 노드라면 배열의 길이만큼 반복문을 돌며 대각선과 
		// 세로에 퀸이 존재하는지 확인 후 존재한다면 현재위치에 퀸을 놓을 수 없다고 판단
    // false를 return 하고 존재하지 않는다면 퀸을 놓을 수 있다고 판단하여 true를 return 해줍니다.
    for (let idx = 0; idx < status.length; idx++) {
      if (Math.abs((row - status[idx]) / (col - idx)) === 1) {
        return false;
      }
    }
    return true;
  };
	// 매개변수인 row값이 n과 같아지면 함수가 종료됩니다.
	// 0부터 n - 1행까지 모두 퀸이 채워지면 경우의 수(answer)를 1 더해줍니다.
  const dfs = (n, row, status) => {
    if (row === n) {
      answer ++;
      return;
    }
		// n만큼 반복문을 동며 현재 위치에 퀸을 놓을 수 있는지 확인해준다.
		// 놓을 수 있다면 자리에 row값을 기록하고 재귀를 통해 row에 1을 더한 후 
		// dfs함수를 실행한다.
    for (let col = 0; col < n; col++) {
      if (isAvailable(status, row, col)) {
        status[col] = row;
        dfs(n, row + 1, status);
        status[col] = NOT_VISITED;
      }
    }
  };

  dfs(n, 0, status);

  return answer;
}