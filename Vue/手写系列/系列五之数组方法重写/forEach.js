// @ts-nocheck
let arr = [1, 2, 3, 4, 5]


Array.prototype.myForEach = function (callback) {
    let arr = this
    let arr2 = arguments[1] 

    for (let i = 0; i < arr.length; i++){
        callback.apply(arr2,[arr[i],i,arr])
    }
}

arr.myForEach(item => {
    console.log(item); // 1 2 3 4 5
})