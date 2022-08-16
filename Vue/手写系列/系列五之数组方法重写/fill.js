// @ts-nocheck
[1, 2, 3].fill(4)
console.log([1, 2, 3].fill(4));  //  4 4 4 

// arr.fill(value[, start[, end]]) 
// fill接收三个参数 vlaue start 和end ,start和end是可选的,其默认值分别为 0 和this对象的length属性值

Array.prototype.myFill = function (val, start = 0, end = this.length) {
    for(let i = start; i < end; i++){
        if (i > 0) {
            this[i] = val
        } else {
            this[i+this.length] = val
        }
    }
    return this
}

console.log([1,2,3].myFill(4,-3,-2));