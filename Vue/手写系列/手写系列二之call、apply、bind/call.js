// @ts-nocheck
// call 的使用者必须是函数 ，返回一个修改过作用域函数的返回结果

const obj = {
    name: 'a',
    getName(age='') {
        this.age =age
        console.log(this.name,this.age);
    }
}

const obj2 = {
    name:'sam'
}

obj.getName()  //a
obj.getName.call(obj2) // sam


Function.prototype.call_hander = function(context,...args) {
    context = context || window
    // 创建一个唯一属性
    let fn = Symbol('fn')
    // 将调用这个call方法的函数挂在到content对象上
    context.fn = this
    //执行调用这个函数
    context.fn(...args)
    // 删除这个属性
    delete fn
}

obj.getName.call_hander(obj2,5)
