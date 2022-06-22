// 对象类型 对象用interface来限定类型

interface IPerson{
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