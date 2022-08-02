// @ts-nocheck
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {    
        resolve(fn())
    },0)
})
function fn() {
    return 'www'
}
let p2 = Promise.resolve('bbb')
let p3 = Promise.reject('ccc')
let p4 = Promise.resolve('ddd')

Promise.all([p1, p2,p3,p4])  // 所有promise成功后输出所有的成功值，只要有一个失败就会抛出第一个失败的值
    .then(res => {
    console.log(res);
    })
    .catch(err => {
    console.log(err);
    })

    // Promise.race([p1, p2, p4]) // 哪个接口先返回数据就先输出哪个
    // .then(res => {
    // console.log(res);
    // })
    // .catch(err => {
    // console.log(err);
    // })