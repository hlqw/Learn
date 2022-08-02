// @ts-nocheck
// 手写promise.all
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {    
        resolve(fn())
    },0)
})
function fn() {
    return 'www'
}
let p2 = Promise.resolve('bbb')
// let p3 = Promise.reject('ccc')
let p4 = Promise.resolve('ddd')

const PromiseAll = (iterator) => {
    const promises = Array.from(iterator);
    console.log(promises);
    const len = promises.length
    let index = 0;
    let data = []
    return new Promise((resolve, reject) => {
        for (let i = 0; i < len; i++){
            promises[i]
                .then((res) => {
                data[i] = res
                if (++index === len) {
                    resolve(data)
                }
                })
                .catch((err) => {
                    reject(err)
                })
        }
    })
}

const PromiseRace = (iterator) => {
    const promises = Array.from(iterator)
    return new Promise((resolve, reject) => {
        promises.forEach((item, i) => {
            Promise.resolve(item).then(val => {
                resolve(val)
            }, err => {
                reject(err)
            })
        })
    })
}

PromiseAll([p1, p2,p4]).then(res => {
    console.log(res);
})
.catch((err) => {
        console.log(err);
})

PromiseRace([p1, p2,p4]).then(res => {
    console.log(res);
})