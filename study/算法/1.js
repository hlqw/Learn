var asteroidCollision = function(asteroids) {
    // let len = asteroids.length
    let arr = JSON.parse(JSON.stringify(asteroids)).sort()

    while(arr[0] < 0){
        for(let i=0;i<asteroids.length;i++){
        if(asteroids[i]>0&&asteroids[i+1]<0 ){
           if(Math.abs(asteroids[i])>Math.abs(asteroids[i+1])){
               asteroids.splice(i+1,1)
                arr =JSON.parse(JSON.stringify(asteroids)).sort()
           }else if(Math.abs(asteroids[i])<Math.abs(asteroids[i+1])){
               asteroids.splice(i,1)
                arr =JSON.parse(JSON.stringify(asteroids)).sort()
           }else{
               asteroids.splice(i,2)
                arr =JSON.parse(JSON.stringify(asteroids)).sort()
           }
        }
    }
    }
    return asteroids
};

let arr = [-2,-1,1,2]
asteroidCollision(arr)  
console.log(asteroidCollision(arr));