// @ts-nocheck
function a() {
  console.log("testAAAAAAA");
  return new Promise((resolve, reject) => {
    resolve("ok");
  });
}
function b() {
  console.log("testBBBBBBB");
}

// let p = a().then((res) => {
//   return b();
// });
// console.log(p);

const PENDING = "pending";
const RESOLVED = "resloved";
const REJECTED = "rejected";
class Promise_hander {
  constructor(fn) {
    this.state = PENDING;
    this.value = null; //用来存放resolce内部的函数
    this.resolvedCallBack = []; // 存放resolv的回调函数
    this.rejectedCallBack = []; // 存放reject的回调函数

    let resolve = (v) => {
      if (this.state === PENDING) {
        this.value = v;
        this.state = RESOLVED;
        this.resolvedCallBack.map((cb) => cb(this.value));
      }
    };
    let reject = (v) => {
      if (this.state === PENDING) {
        this.value = v;
        this.state = REJECTED;
        this.rejectedCallBack.map((cb) => cb(this.value));
      }
    };

    try {
      fn(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }
  then(onFufilled, onRejected) {
    if (typeof onFufilled === "function" ? onFufilled : (v) => v)
    if (
        typeof onRejected === "function"? onRejected: (r) => {
              throw r;
            }
    )
      var thenPromise = new Promise_hander((resolve, reject) => {
        const resolvePromise = cb => {
          try {
            const x = cb(this.value)
            if (x === thenPromise) {
              throw new Error('不能返回自身')
            }
            if (x instanceof Promise_hander) {
              x.then(resolve,reject)
            } else {
              resolve(x)
            }
          } catch (error) {
            reject(error)
            throw new Error(error)
          }
        }
        if (this.state === PENDING) {
          this.resolvedCallBack.push(resolvePromise.bind(this,onFufilled));
          this.rejectedCallBack.push(resolvePromise.bind(this,onRejected));
          }
      if (this.state === RESOLVED) {
        resolvePromise(onFufilled)
      }
      if (this.state === REJECTED) {
        resolvePromise(onRejected);
      }
      })
    
    return thenPromise
    // if (this.state === PENDING) {
    //     this.resolvedCallBack.push(onFufilled);
    //     this.rejectedCallBack.push(onRejected);
    //     }
    // if (this.state === RESOLVED) {
    //   onFufilled(this.value);
    // }
    // if (this.state === REJECTED) {
    //   onRejected(this.value);
    // }

    // return thenPromise
  }
}

const p = new Promise_hander((resolve, reject) => {
  setTimeout(() => {
    resolve("yes");
  }, 1000);
});
p.then(
  (res) => {
    console.log(res, "444444");
    return res
  },
  (err) => {
    console.log(err);
  }
).then(res => {
  console.log(res,'5555');
})

// 链式调用 输出300
// const p = new Promise_hander((resolve, reject) => {
//   resolve(100)
// })
// let p1 =  p.then(res => new Promise_hander((resolve, reject) => resolve(3 * res)))
 
// let p5 = p1.then(res => console.log(res))
