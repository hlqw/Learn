var a = 1
let age:number = 18
// age = '19'
 console.log(age);

console.log('Hello ts');

// 数组类型
let arr :Array<number> = [1,2]
let strimg :string[] = ['1','2']

// 联合类型 可以包含数字和字符串
type StringNumber= (string|number)[] //类型别名
let mix : StringNumber= [1,'2',4]
let mix2 : (string|number)[] = [1,'2',4]

// 数字或者字符串
let mix3 : string|number[] = [1,2,]


// 函数类型
function add(num1:number,num2:string):string{
    return num1 + num2
}
const sum = (num1:number,num2:number):number =>{
    return num1 + num2
}
const sum1:(num1:number,num2:number) =>number = (num1,num2)=>{ 
    return num1+num2
}

function fn (name:string,age?:number):void{
    console.log(name);
    
}

// 对象类型
let person:{name:string;age:number;sayHi():void;}={
    name:'hh',
    age:18,
    sayHi(){}
}