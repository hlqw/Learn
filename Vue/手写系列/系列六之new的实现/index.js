
function Person (name,age,sex){
    this.name = name;
    this.age = age;
    this.sex = sex;
}


const objectFactory = function () {
    let obj = new Object()  // 1
    Constructor = [].shift.call(arguments) //2  “ 删除arguments的第一项并返回，也就是拿到 arguments 的第一项 ”。
    obj.__proto__ = Constructor.prototype  //3
    var ret = Constructor.call(obj, ...arguments) //4
    
    // 确保 使用new返回的是一个 object 对象
    return typeof ret === 'object' ? ret : obj;

}


// 通过手写new ，就是objectFactory()方法创建的实例
const obj1 = objectFactory(Person,"cmm",18,"man")

console.log(obj1) //Person { name: 'cmm', age: 18, sex: 'man' }