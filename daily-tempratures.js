function dailyTemperatures(temperatures) {
    let stack = new Array(temperatures.length).fill(-1), result = new Array(temperatures.length).fill(0);

    for (let index = 0; index < temperatures.length; index++) {
        const element = temperatures[index];

        while(stack.length && element > temperatures[stack[stack.length-1]]) {
            const prevIndex = stack.pop();
            result[prevIndex] = index-prevIndex
        }

        stack.push(index)
    }

    return result
}

// Input: temperatures = [73,74,75,71,69,72,76,73]
// Output: [1,1,4,2,1,1,0,0]

console.log(dailyTemperatures([73,74,75,71,69,72,76,73]));


