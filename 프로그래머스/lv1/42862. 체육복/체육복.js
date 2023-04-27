function solution(n, lost, reserve) {    
    const students = new Map();
    let answer = 0;
    
    for (let i = 1; i <= n; i++) {
        students.set(i, 1);
    }
    
    for (let i = 0; i < lost.length; i++) {
        students.set(lost[i], students.get(lost[i]) - 1);
    }

    for (let i = 0; i < reserve.length; i++) {
        students.set(reserve[i], students.get(reserve[i]) + 1);
    }

    for (let i = 1; i <= n; i++) {
        if (students.get(i) === 2 && students.get(i - 1) === 0) {
            students.set(i, students.get(i) - 1);
            students.set(i - 1, students.get(i - 1) + 1);
        } else if (students.get(i) === 2 && students.get(i + 1) === 0) {
            students.set(i, students.get(i) - 1);
            students.set(i + 1, students.get(i + 1) + 1);
        }
    }

    for (const [key, value] of students) {
        if (value >= 1) answer++;
    }
    
    return answer;
}