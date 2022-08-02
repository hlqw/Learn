// @ts-nocheck
let arr = [[1], [2, [3, 4]]]

console.log(arr.flat());  //[ 1, 2, [ 3, 4 ] ]
console.log(arr.flat(2)); //[ 1, 2, 3, 4 ]


Array.prototype.myFalt = function (num = 1) {
    if (num < 1) {
        return this
    }
    const res = []
    for (let i = 0; i < this.length; i++){
        if (Array.isArray(this[i])) {
            res.push(...this[i].myFalt(num-1))
        } else {
            res.push(this[i])
        }
    }
    return res
}

console.log(arr.myFalt()); 
console.log(arr.myFalt(2)); 