// @ts-nocheck
let arr = [1, 2, 3, 4, 5]

let ans = arr.reduce((pre, item, i, arr) => {
    pre += item
   
    return pre
})
console.log(ans);


Array.prototype.reduce_hander = function (cb, initiaValue) {
    let arr = this
    let total = initiaValue ? initiaValue : arr[0]

    for (let i = initiaValue ? 0 : 1; i < arr.length; i++){
        total  = cb(total,arr[i],i,arr)
    }
    return total

}
let ans1 = arr.reduce_hander((pre, item, i, arr) => {
    pre += item
    return pre
},5)
console.log(ans1);
