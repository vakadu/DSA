function removeKDigits(num, k) {
    let result="", max=0;

    for(let i=0;i<num.length;i++) {
        let temp = num.slice(i,i+k);
        max=Math.max(max,Number(temp));
        
        if(Number(temp) === max) {
            result = num.slice(0,i)+num.slice(i+k);            
        }
    }
    console.log(result);
    

    return result
}

// Input: num = "1432219", k = 3
// Output: "1219"

// console.log(removeKDigits("1432219", 3));
removeKDigits("10200", 1)     // "200"

