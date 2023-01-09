function solution(people, limit) {
    let answer = 0;
    let start = 0;
    let end = people.length - 1;
    people.sort((a, b) => b - a);
   
    while (start <= end) {
        if (people[start] + people[end] <= limit) {
            start++;
            end--;
            answer++;
        } else {
            start++;
            answer++;
        }
    }
    
    return answer;
}