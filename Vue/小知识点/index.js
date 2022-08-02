// @ts-nocheck

// 1. 获取字符串中的字符数
let str = 'asddsdafgdgfdgdas'

const characterCount = (str, char) => str.split(char).length-1

console.log(characterCount(str, 'a')); ///3


// 2. 检查对象是否为空
// 检查对象的长度是否等于0，以及传递的参数是否为实际对象
// Reflect.ownKeys(target) 返回所有的属性key,包括不可枚举类型，不包括继承的属性，和Object.keys（）的区别是 Object.keys（）不包括可枚举类型
let a = {}
let b = {age:18}
const isEmpty = obj => Reflect.ownKeys(obj).length === 0 && obj.constructor === Object
console.log(isEmpty(a)); // true
console.log(isEmpty(b)); // false

// 3. 等待一段时间再执行
const wait = async (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds))
wait(3000).then(() => console.log('gagagagag')) // 3s 后打印

// 4. 重定向到另一个URL
// location是全局窗口对象的方法，设置href属性的行为与用户单击链接相同
const redirect = url => location.href = url
// redirect('wwww.baidu.com')

// 5.在元素后面插入HTML字符串
const innerHTMLAfter = (html, el) => el.insertAdjacentHTML('afterend', html)

// 6. 随机排列数组
let arr = [1, 2, 3, 4, 5]
const shuffle = arr => arr.sort(() => 0.5 - Math.random())
console.log(shuffle(arr));

// 7. 计算数组的平均值
const average = (arr) => arr.reduce((a,b)=>a+b) / arr.length
