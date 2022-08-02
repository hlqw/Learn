// @ts-nocheck
// every 每个都成功则返回true，否则有一个不成功返回false
let arr = [1, 2, 3, 4, 5]

Array.prototype.myEvery = function (callback) {
    let arr = this
    let arr2 = arguments[1]  
    let flat = true

    for (let i = 0; i < arr.length; i++){
        if (!callback.apply(arr2, [arr[i], i, arr])) {
            flat = false
        }

        return flat
    }
}

let res = arr.myEvery(item => {
    return item > 0
})
console.log(res);