// @ts-nocheck
async function testAsync() {
    return 'hello'
}
const result = testAsync()
console.log(result); //Promise { 'hello' }
result.then((res) => {
    console.log(res); // hello    async函数内部return语句返回的值，会成为then方法回调函数的参数
})

