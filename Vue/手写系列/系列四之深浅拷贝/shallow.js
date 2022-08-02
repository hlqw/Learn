// @ts-nocheck
// 浅拷贝


// 对象赋值
let obj = {
    name: 'hl',
    age: 21,
    like:[1,[2,3,4],5]
}

let o1 = obj
o1.name = 'qq'
let o2 = ShadowClone(obj)
o2.name = 'ww'
console.log(obj);
console.log(o1);
console.log(o2);

function ShadowClone(obj) {
    let newObj = {}
    for (let item in obj) {
        if (obj.hasOwnProperty(item)) {
            newObj[item]= obj[item]
        }
    }
    return newObj
}
