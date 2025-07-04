function countSay(n) {
    let result = ['1', '11'];

    for(let i=2; i<n; i++) {
        let currStr = result[i-1], count=1, temp = "";
        for (let index = 1; index <= currStr.length; index++) {
            const element = currStr[index];
            if(element === currStr[index-1]) {
                count++;
            } else {
                temp += count+currStr[index-1]
                count = 1;
            }
        }
        result.push(temp);
        temp = ""        
    }    

    return result[n-1]
}

console.log(countSay(5));

