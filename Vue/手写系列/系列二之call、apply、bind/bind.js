// @ts-nocheck
// @ts-ignore
const obj = {
    name: 'a',
    getName(age='',tall='') {
        this.age = age
        
        console.log(this.name,this.age,tall);
    }
}

// @ts-ignore
const obj2 = {
    name:'sam'
}

// bind 的区别就是返回一个修改过this指向的函数，并不会调用
Function.prototype.bind_hander = function (context, ...args) {
    let that = this
    context = context || window
    // args = args ? args : []
    args =[...arguments].slice(1)  
    return function Bind() {
        return that.call(context,...(args.concat(Array.from(arguments))))
    }
}
const test = obj.getName.bind(obj2, 21)
test(180)
