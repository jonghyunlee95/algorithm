function solution(participant, completion) {
    const participantMap = new Map();
    let answer = '';
    
    for (let i = 0; i < participant.length; i++) {
        if (!participantMap.get(participant[i])) participantMap.set(participant[i], 1);
        else participantMap.set(participant[i], participantMap.get(participant[i]) + 1);
    }
    
    for (let j = 0; j < completion.length; j++) {
        if (participantMap.get(completion[j])) {
            participantMap.set(completion[j], participantMap.get(completion[j]) - 1)
        }
    }
    
    participantMap.forEach((value, key) => {
         if (value) answer = key
    }) 

    return answer
}