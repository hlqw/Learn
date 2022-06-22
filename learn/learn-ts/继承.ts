
// 1. extends
class Animal{
    move(){
        console.log('走俩步');
    }
}
class Dog extends Animal{
    drag(){
        console.log('汪汪');
        
    }
}

let dog = new Dog()
// dog.move()
// dog.drag()

// 2. implements

interface Singable{
    sing():void
    name:string
}
class Pers implements Singable{
    name: 'wx'; 
    sing(){
        console.log('湖底哦撒毒爱哦大家爱哦') 
    }
}

let p1 = new Pers()
p1.sing()