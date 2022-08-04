// @ts-nocheck
var myPow = function(x, n) {
    if (x == 1 || n == 0) {
        return 1
    }
    let ans = parseFloat(1.0)
    for (let i = n; i != 0; i = parseInt(i / 2)){
        console.log(i);
        if (i % 2 != 0) {
            ans *= x
        }
            x *=x
       
    }
    return n > 0 ? ans : 1/ans
};

myPow(2, 9)
console.log(myPow(2, -2));