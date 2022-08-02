// @ts-nocheck
// 深拷贝


// 对象赋值
let obj = {
    name: 'hl',
    age: 21,
    like:[1,[2,3,4],5]
}

let o1 = obj
o1.name = 'qq'
o1.like[1] = [4, 5, 6]

let o2 = DeepClone(obj)
o2.name = 'ww'
o2.like[1] = [4, 5, 6]

console.log(obj);
console.log(o1);
console.log(o2);

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