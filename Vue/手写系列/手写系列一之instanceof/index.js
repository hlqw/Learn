// instanceof

/**
 * @param {string} name
 */
function Parent(name) {
    this.name = name 
}
function Animal() {
}

let child = new Parent('hh')
let pig = new Animal()
// @ts-ignore
//console.log(child.__proto__ == Parent.prototype); // true
//console.log(child instanceof Parent); // true
// 实例对象的隐式原型等于构造函数的显示原型



function instanceof_header(P,C) {  
   let  parentPro = P.prototype
    let childPro = C.__proto__
    while (childPro) {
        if (parentPro === childPro) {
            return true
        } 
        childPro = childPro.__proto__
        
    }
    return false
}

function myInstanceof(A, B) {
    //拿到原型对象
    var BPro = B.prototype;
    //拿到原型链
    var startA = A.__proto__;

    //如果while条件达不到，则说明B不在A的原型链上 返回false
    while (startA) {
        //如果原型链和原型对象相等说明在，直接返回true结束函数
        if (startA === BPro) {
            return true;
        }
        //每次要获取上一级的原型对象,就是一个往上找的过程
        startA = startA.__proto__;
    }
    //当startA.__proto__往上找不到了退出循环，返回false
    return false;
}

console.log(instanceof_header(Parent, pig));
console.log(myInstanceof(Parent,pig));