function solution(str1, str2) {
    let answer = 0;
    let arr1 = [];
    let arr2 = [];
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    
    for (let i = 0; i < str1.length - 1; i++) {
        let str = str1.substring(i, i + 2);
        let ascii1 = str[0].charCodeAt();
        let ascii2 = str[1].charCodeAt();
        
        if (ascii1 >= 97 && ascii1 <= 122 && ascii2 >= 97 && ascii2 <= 122) {
         arr1.push(str);   
        }
    }
    
    for (let j = 0; j < str2.length - 1; j++) {
        let str = str2.substring(j, j + 2);
        let ascii1 = str[0].charCodeAt();
        let ascii2 = str[1].charCodeAt();
        
        if (ascii1 >= 97 && ascii1 <= 122 && ascii2 >= 97 && ascii2 <= 122) {
         arr2.push(str);   
        }
    }
    
    if (arr1.length === 0 && arr2.length === 0) return 65536;
    
    const same = [];
    const sum = [];
    
    for (let i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) >= 0) {
            same.push(String(arr1.splice(arr1.indexOf(arr2[i]), 1)));
        }
        
     sum.push(arr2[i]);
    }

    for (let i = 0; i < arr1.length; i++) {
        sum.push(arr1[i]);
     }
    
    return Math.floor(same.length / sum.length * 65536);
}