 function solution(numbers, hand) {
    function findKey(num) {
        const keyPad =[[1, 2, 3], [4, 5, 6], [7, 8, 9], ['*', 0, '#']];
    
        for (let i = 0; i < keyPad.length; i++) {
            for (let j = 0; j < keyPad[i].length; j++) {
                if (keyPad[i][j] === num) return [i, j];
            }
        }
    }
     
    let answer = '';
    let leftHand = findKey('*');
    let rightHand = findKey('#');
    
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === 1 || numbers[i] === 4 || numbers[i] === 7) {
            answer += 'L';
            leftHand = findKey(numbers[i]);
        } else if (numbers[i] === 3 || numbers[i] === 6 || numbers[i] === 9) {
            answer += 'R';
            rightHand = findKey(numbers[i]);
        } else if (numbers[i] === 2 || numbers[i] === 5 || numbers[i] === 8 || numbers[i] === 0) {
            const middleLine = findKey(numbers[i]);
            const leftDistance = Math.abs(leftHand[0] - middleLine[0]) + Math.abs(leftHand[1] - middleLine[1]);
            const rightDistance = Math.abs(rightHand[0] - middleLine[0]) + Math.abs(rightHand[1] - middleLine[1]);
            
            if (leftDistance > rightDistance) {
                answer += 'R';
                rightHand = middleLine;
            } else if (leftDistance < rightDistance) {
                answer += 'L';
                leftHand = middleLine;
            } else if (leftDistance === rightDistance && hand === 'right') {
                answer += 'R';
                rightHand = middleLine;
            } else if (leftDistance === rightDistance && hand === 'left') {
                answer += 'L';
                leftHand = middleLine;
            }
        }
    }
    return answer;
}