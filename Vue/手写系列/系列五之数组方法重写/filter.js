// @ts-nocheck
let arr = [1, 2, 3, 4, 5]

let res = arr.filter(i => i > 2)
console.log(res);  //[ 3, 4, 5 ]


Array.prototype.myFilter = function(fn) {
    var arr = this
      len = arr.length
      arg2 = arguments[1] 
      newArr = [];
    for(var i =0; i < len; i++) {
      var item = DeepClone(arr[i]);
      fn.apply(arg2, [item, i, arr])? newArr.push(item): ''
    }

    return newArr;
}

function DeepClone(obj) {
    if (obj === null) return 
    if (obj instanceof Date) return new Date(obj);
    if (obj instanceof RegExp) return new RegExp(obj);
    if (typeof obj !== "object") return obj;
    let newObj = new obj.constructor();
    for (let item in obj) {
     if (obj.hasOwnProperty(item)) {
            newObj[item]= DeepClone(obj[item])
        }
    }
    return newObj
}
let res1 = arr.myFilter(i => i > 2)
console.log(res1);