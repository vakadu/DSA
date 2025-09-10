function simplifyPath(path) {
    const splitPaths = path.split('/');
    let stack = [];

    for (let index = 0; index < splitPaths.length; index++) {
        const element = splitPaths[index];        
        if(element === "..") {
            stack.pop()
        } else if(element === "." || element === "") {
            continue;
        } else {
            stack.push(element)
        }
    }
    
    return '/' + stack.join('/')
}

console.log(simplifyPath("/home/"));                // "/home"
console.log(simplifyPath("/../"));                  // "/"
console.log(simplifyPath("/home//foo/"));           // "/home/foo"
console.log(simplifyPath("/a/./b/../../c/"));        // "/c"
console.log(simplifyPath("/a/../../b/../c//.//"));   // "/c"
console.log(simplifyPath("/a//b////c/d//././/.."));  // "/a/b/c"
