// @ts-nocheck
let arr = [1, 2, 3, 4, 5]


Array.prototype.myForEach = function (callback) {
    let arr = this
    let arr2 = arguments[1]  // 可以接受两个参数，如果传了第二个参数则作为需要绑定的this

    for (let i = 0; i < arr.length; i++){
        callback.apply(arr2,[arr[i],i,arr])
    }
}

arr.myForEach(item => {
    console.log(item); // 1 2 3 4 5
})