const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

class MyPromise{
  constructor(fn){
    this.state = PENDING
    this.value = null //用来存放resolve() 内部的参数
    this.resloveCallBacks = []  //存放.then() 里面的回调函数
    this.rejectCallBacks = []  //存放 .catch() 里面的回调函数

    let resolve = value =>{
      if(this.state === PENDING){
        this.state = RESOLVED
        this.value = value

        this.resloveCallBacks.map(cb =>cb(this.value))
      }
    }
    let reject = value =>{
      if(this.state === PENDING){
        this.state = REJECTED
        this.value = value

        this.rejectCallBacks.map(cb => cb(this.value))
      }
    }

    try {
      fn(resolve,reject)
    } catch (error) { 
      reject(error)
    }
  }

  then(onFufilled,onRejected){
    if(typeof onFufilled === 'function' ? onFufilled : v => v)
    if(typeof onRejected === 'function' ? onRejected : r =>{
      throw r
    })

    var thenPromise = new MyPromise((resolve,reject) =>{

      const resolvePromise = cb =>{
        try {
          const x = cb(this.value)
          if(x === thenPromise){
            throw new Error('不能返回自身')
          }
          if(x instanceof MyPromise){
            x.then(resolve,reject)
          }else{
            // console.log(456);
            resolve(x)
          }
        } catch (error) {
            reject(error)
            throw new Error(error)
        }
      }
      if(this.state === PENDING){
        this.resloveCallBacks.push(resolvePromise.bind(this,onFufilled))
        this.rejectCallBacks.push(resolvePromise.bind(this,onRejected))
      }
      if(this.state === RESOLVED){
        resolvePromise(onFufilled)
      }
      if(this.state === REJECTED){
        resolvePromise(onRejected)
      }
    })
    
    return thenPromise
  }

}


// const test3 = new MyPromise((resolve, reject) => {
//   resolve(100) // 输出 状态：成功 值： 200
//   // reject(100) // 输出 状态：成功 值：300
// }).then(res => 2 * res, err => 3 * err)
//   .then(res => console.log('成功', res), err => console.log('失败', err))


// 链式调用 输出300
const p = new MyPromise((resolve, reject) => {
  resolve(100)
})
let p1 =  p.then(res => new MyPromise((resolve, reject) => resolve(3 * res)))
 
let p5 = p1.then(res => console.log(res))
