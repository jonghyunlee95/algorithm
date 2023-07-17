function solution(s) {
    // s를 split매서드를 이용하여 배열로 변환
    // ... spread연산자를 이용해 배열 중 가장 작은 값과 큰값을 템플릿 리터럴을 이용해 문자열로 변환
    return `${Math.min(...s.split(' '))} ${Math.max(...s.split(' '))}`;
}