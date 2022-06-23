class Animal{
    protected move(){
        this.run()
        console.log('Moving along!');
        
    }
    private run (){
        console.log('run');

    }
}

class Dog extends Animal{
    bark(){
        // this.run()0
00        this.move()
        console.log('汪汪');
    } 
}


let ani = new Animal()
// ani.move()