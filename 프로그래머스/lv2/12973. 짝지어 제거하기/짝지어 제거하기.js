function solution(s){
    // 스택에 이용할 빈 배열 선언
    const arr = [];
    
    // 문자열 s를 반복문으로 확인하며
    for (let i = 0; i < s.length; i++) {
        // 배열의 마지막 값과 현재 s[i]의 값을 비교하고 같지 않다면 
        if (arr[arr.length - 1] !== s[i]) {
            // arr에 s[i]값을 push해줍니다.
            arr.push(s[i]);
        } else {
            // 같다면 arr의 마지막값을 pop해줍니다.
            arr.pop();
        }
    }
    
    // 모든 과정을 끝낸 후 stack에 사용한 배열의 길이를 확인하고
    // 0이라면 1을 0이 아니라면 0을 return 해줍니다.
    if (!arr.length) return 1;
    else return 0;
}