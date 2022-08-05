async function test() {
    console.log('async函数');
    return 2
}

// test().then(val => {
//     console.log(val);
// })

async function test1() {
    console.log('async-await');
    let a = await 1
    let b = await new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve('setTimeout')
        },3000)
    })
    console.log(a,b);
}

test1()