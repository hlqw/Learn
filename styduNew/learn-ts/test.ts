// 类型断言 来指定更为具体的类型

// const alink = document.getElementById('link') as HTMLAnchorElement
// const alink = <HTMLAnchorElement>document.getElementById('link') 
// alink.href


let str1 = 'hello ts' 
const str2 : string = 'helll ts'

// let age:number = 19

// 枚举：定义一组命名常量

enum Direction {Up,Down='s',Left=1,Right}

function changeDirection(direction:Direction){
    console.log(direction); //返回下标
    
}
changeDirection(Direction.Up)