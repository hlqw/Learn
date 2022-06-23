// 类型别名

type IPerson = {
    name:string;
    age:number;
    sayHi():void;
}

let persons:IPerson={
    name:'hh',
    age:18,
    sayHi(){}
}
// 对象类型
let persons1:{name:string;age:number;sayHi():void;}={
    name:'wn',
    age:20,
    sayHi(){}
}


// 接口之间的继承 如果两个接口中有两个相同的属性和方法，可以将公共的属性或方法抽离出来，通过继承来实现复用

interface Point2D {x:number;y:number}
interface Point3D extends Point2D {z:number}  // 继承Point2D的部分

let p3:Point3D = {
    x:1,
    y:1,
    z:1
}