function solution(s) {
    const str_num = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
   
    
    for (let i = 0; i < str_num.length; i++) {
        if (s.includes(str_num[i])) {
            s = s.replaceAll(str_num[i], num[i]);
        }
    }
    
    return Number(s);
}