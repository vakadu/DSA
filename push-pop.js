function pushPop(pushed, popped) {
    let result = [], j=0;

    for(let val of pushed) {
        result.push(val);

        while(result[result.length-1] === popped[j]) {
            result.pop();
            j++;
        }
    }
    
    return result.length <= 0
}

// Input: pushed = [1,2,3,4,5], popped = [4,5,3,2,1]  
// Output: true

// Input: pushed = [1,2,3,4,5], popped = [4,3,5,1,2]  
// Output: false


console.log(pushPop([1,2,3,4,5], [4,5,3,2,1]  ));

