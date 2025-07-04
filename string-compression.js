function stringCompression(chars) {
    let result = [], i=0;

    
    while(i<chars.length) {
        let char = chars[i], count = 1;

        while(char === chars[i+1]) {
            i++;
            count++;
        } 

        result.push(char);
        result.push(`${count}`);

        i++
    }

    return result
}

const chars = ["a","a","b","b","c","c","c"];
console.log(stringCompression(chars));

