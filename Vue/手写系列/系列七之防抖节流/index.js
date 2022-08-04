// @ts-nocheck
// 防抖
function debounce(fn,delay=2000) {
    let timeout;
    return function (...args) {
        if (timeout) {
            clearTimeout(timeout)
        }

        timeout = setTimeout(() => {
            fn.apply(this,args) 
        },delay)
    }
    
}


//节流
function throttle(fn,delay=1000) {
    let start = 0;
    return function (...args) {
        let now = Date.now()
        if (now - start >= delay) {
            fn.apply(this, args)
            start = now
        }
    }
}
