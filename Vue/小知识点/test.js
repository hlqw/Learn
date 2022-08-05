let abc = Object.prototype.toString.call(""); // "[object Number]"
// console.log(abc.slice(7, -1));
// console.log(0.1 + 0.2); //0.30000000000000004

// setTimeout(function(){
//     console.log('定时器开始啦')
// });

new Promise(function(resolve){
    console.log('马上执行for循环啦');
    for(var i = 0; i < 10000; i++){
        i == 99 && resolve('ok');
    }
}).then(function(){
    console.log('执行then函数啦')
});

console.log('代码执行结束');

function once(fn) {
    // 标识 用于控制函数只执行一次
    let done = false;
    
    return function (...args) {
        // 判断
        console.log(!done);
        if (!done) {
            done = true;
            // 执行函数
            fn.call(this, ...args);
        }
    };
}

// 测试
let pay = once(function (money) {
    console.log(`支付：${money} RMB`);
});
// pay(5);
// pay(5);
// pay(5);

