// @ts-nocheck
// apply 的使用者必须是函数 ，返回一个修改过作用域函数的返回结果

const obj = {
    name: 'a',
    getName(age='',tall='') {
        this.age = age
        
        console.log(this.name,this.age,tall);
    }
}

const obj2 = {
    name:'sam'
}

obj.getName()  //a
obj.getName.call(obj2) // sam


Function.prototype.apply_hander = function(context,args) {
    context = context || window
    args = args ? args : []
    // 创建一个唯一属性
    let fn = Symbol()
    // 将调用这个call方法的函数挂在到content对象上
    context.fn = this
    //执行调用这个函数
    const result = context.fn(...args)
    // 删除这个属性
    delete context[fn]
    return result
}

obj.getName.apply_hander(obj2,[5,6])
