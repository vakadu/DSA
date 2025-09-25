function mySqrt(n) {
    for (let index = 0; index <= n; index++) {
            console.log(Math.sqrt(index), index);

    }
    
}

// console.log(mySqrt(4))   // 2
console.log(mySqrt(8))   // 2  (since sqrt(8) = 2.82 → floor = 2)
// console.log(mySqrt(1))   // 1
// console.log(mySqrt(0))   // 0
// console.log(mySqrt(15))  // 3
