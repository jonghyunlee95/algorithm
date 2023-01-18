function solution(skill, skill_trees) {
    let answer = 0;
    
    for (let i = 0; i < skill_trees.length; i++) {
        let arr = [...skill.split('')];
        skill_trees[i] = skill_trees[i].split('').filter(x => arr.includes(x));
        
        
        while (arr.length !== skill_trees[i].length) {
            arr.pop();
        }
        
        if (arr.join('') === skill_trees[i].join('')) {
            answer++;
        }
    }

    return answer;
}