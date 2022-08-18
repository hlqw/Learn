#  Map 和 Set 的区别？
1. Map是键值对，Set是值得集合，当然键和值可以是任何的值；

2. Map可以通过get方法获取值，而set不能因为它只有值；

3. 都能通过迭代器进行for...of遍历；

4. Set的值是唯一的可以做数组去重，Map由于没有格式限制，可以做数据存储；


# Map 和 Object的区别？
1. Map中的键是有序的（FIFO原则），而添加到对象中的键则不是。
2. Map中的键值对个数可以从size属性获取，而添加到对象中的键则不是。
3. 一个Object的键只能是字符串或者Symbols，但是一个Map的键可以是任意值。

Map对象的方法：
- set(key,val): 向Map中添加新元素。
- get(key,val): 通过键值查找特定的数值并返回。
- has（key,val: 通过Map对象中是否有Key所对应的值，有返回true，否则返回false。
- delete(key): 通过键值从Map中移除对应的数据。
- clear（）：将这个Map中的所有元素删除

Map对象的遍历方法：
- keys(): 返回键名的遍历器
- values(): 返回键值的遍历器
- entries(): 返回键值对的遍历器
- forEach(): 使用回调函数遍历每个成员


# 数组的filter、every、flat的作用是什么？
1. filter(): 对数组中的每一项运行给定函数，返回该函数会返回true的项组成的数组。
2. every():  对数组中的每一项运行给定函数，如果该函数对每一项都返回true，则返回true。
3. flat():   会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并成一个新的数组返回。

# promise.all 和 promise.race区别
1. promise.all 接收多个promise包装成一个新的promise，成功返回的是成功的数据，失败返回的是失败的数据，一但失败不会继续执行
2. promise.race 有任意一个返回成功后，就算完成。哪个结果获取的最快，就返回哪个结果。不管返回的结果是成功还是失败。
使用场景
1. all ：一个操作同时需要好几个接口里边的返回数据
2. race：好几个接口会返回一样的数据，哪个接口的数据先返回就使用哪个接口的数据

# new的实现原理
四步骤：
1. 创建一个新对象
2. 链接到原型（将构造函数的prototype赋值给新对象的 __proto__）
3. 绑定this（构造函数中的this指向新对象并且调用构造函数）
4. 返回新对象

# 怎么画一条0.5px的边
1. 直接设置0.5px 
2. 缩放  height: 1px; transform: scaleY(0.5); transform-origin: 50% 100%;
3. 线性渐变linear-gradient  height: 1px; background: linear-gradient(0deg, #fff, #000);
  （1px的逻辑像素代表的是物理（设备）有2px，由于是线性渐变，所以第一个px只能是#fff，第二个px只能是#000 从白色渐变到黑色）
4.  box-shadow   height: 1px; background: none;  box-shadow: 0 0.5px 0 #000;

# ES6新增特性
1. 块级作用域（let，const）
2. 箭头函数
3. 函数默认值（允许对函数参数设置默认值）
4. 模版语法和分隔符 (`...`)
5. 字面量增强（可以简写去掉function，对象中的属性可以通过[]来定义非字符串的变量）
6. 解构（数组解构[...arr],对象解构 var {name,age} = person）
7. Symbol、Set、WeakSet、Map、WeakMap
8. promise、trim、includes、Arrat.from、Object.assign(合并一个或多个对象，所有参数直接合并到第一个参数，返回合并后的对象)、Object.keys、      Object.entries

# 盒模型(由content、padding、border、margin构成)
- 标准盒模型：只包含content
- IE盒模型： content + padding + border

# CSS选择器和优先级

# 重排和重绘
- 重排：无论通过什么方式影响了元素的集合信息（元素在视口内的位置和尺寸大小），浏览器需要重新计算元素在视口内的几何属性，这个过程叫做重排。
- 重绘：通过构造渲染树和重排（回流）阶段，我们知道了哪些节点是可见的，以及可见节点的样式和具体的几何信息（元素在视口内的位置和尺寸大小），接下来就可以将
渲染树的每个节点都转化为屏幕上的实际像素，这个阶段叫做重绘。
如何减少重拍和重绘？
1. 最小化重绘和重排：比如样式集中改变，使用添加新样式类名 .class 或 cssText
2. 批量操作DOM，比如读取某元素offsetWidth属性存到一个临时变量，再去使用。
3. 使用 absolute 或  fixed 使元素脱离文档流
4. 开启GPU加速，利用css属性transform、will-change等，比如改变元素位置，我们使用translate会比使用绝对定位改变其left、top等来的高效。因为它不会
触发重排或重绘IU，transform使浏览器元素创建一个GPU图层，这使得动画元素在一个独立的的层中进行渲染。当元素的内容没有发生改变，就没有必要进行重绘。



# 深拷贝
1. 用 new obj.constructor() 构造函数新建一个空对象而不用{}或者[]，这样可以保持原型链的继承。
2. 用obj.hasOwnProperty(key)来判断属性是否来自原型链上，因为for...in..也会遍历其原型链上的可枚举属性。

# 0.1 + 0.2 !== 0.3,讲讲 IEEE754，如何让其相等？
原因：
1. 进制转换：js在数字计算的时候，0.1和0.2都会被转成二进制后无限循环，但是js采用的IEEE754二进制浮点运算，最大可以存储53位有效数字，于是大于53位后面的全部会被截掉，将导致精度缺失。
2. 对阶运算“由于指数位数不相同，运算时需要对阶运算，阶小的尾数要根据差来右移（0舍1入），尾数位移时可能会发生数丢失的情况，影响精度。


# web存储
- cokkie：存储大小为4KB、http请求时需要发送到服务端，增加请求数量。只能用document.cokkie = '...' 来修改，太过简陋。
- localStorage、sessionStorage
 1. HTML5专门为存储来设计的，最大可存5M。
 2. API简答易用，setItem getItem
 3. 不会随着http请求被发送到服务端。

它们的区别：
1. localStorage 数据会永久存储，除非代码删除或者手动删除
2. sessionStorage 数据只存在于当前会话，浏览器关闭则清空。
3. 一般用localStroage多一些


# 状态码
- 1xx  服务器收到请求
- 2xx  请求成功，如200
- 3xx  重定向，如302
- 4xx  客户端错误，如404
- 5xx  服务端错误。如500


# 缓存策略（强制缓存、协商缓存）



# GET 和 POST 的区别
1. 从缓存的角度，GET请求会被浏览器主动缓存下来，留下历史记录，而POST默认不会。
2. 从编码的角度，GET只能进行URL编码，只能接收ASCLL字符，而POST没有限制。
3. 从参数的角度，GET一般放在URL，因此不安全，POST放在请求体中，更适合传输敏感信息。
4. 从幂等性的角度，GET是幂等的，而POST不是。（幂等表示执行相同的操作，结果也是相等的）。
5. TCP的角度，GET请求会把请求报文一次性发出去，而POST会分为两个TCP数据包，首先发header部分，如果服务器响应100（continue），然后发body部分。（火狐浏览器除外，它的POST请求只发一个TCP包）

# React生命周期
1. 初始化阶段（发生在constructor中的内容，在constructor中进行state、props的初始化，在这个阶段改state，不会执行更新阶段的生命周期，可以对state赋值）
2. 挂载阶段
  - componentWillMount 发生在render函数之前，还没有挂载Dom
  - render
  - componentDidMount  发生在render函数之后，已经挂载DOM
3. 更新阶段
  - componentWillReceiveProps（nextProps，nextState） 这个生命周期主要为我们提供对props发生改变的监听，如果你需要在props发生改变后，相应改变组件的一些state。在这个方法中改变state不会二次渲染，而是直接合并state
  - shouldComponentUpdate(nextProps,nextState)
  - componentWillUpdate(nextProps,nextState)
  - componentDidUpdate(preProps,preState )

4. 卸载阶段


# 前段性能优化
1. 减少HTTP请求
2. 将CSS放在文件头部，JavaScript文件放在底部
3. 减少重排重绘
4. 图片优化
5. 压缩文件
6. 善用缓存，不重复加载相同资源
7. 使用事件代理
8. 静态资源使用CDN
9. 使用服务器端渲染
10. 防抖节流
11. vue组件中使用keep-alive保存组件状态
12. webpack按需加载代码--Tree-Shaking
13. 使用Web Works
14. Vue首屏优化

# 防抖和节流的区别
防抖：如果事件被频繁触发，防抖保证只有一次触发生效，前面N多次触发都会被忽略。
节流：如果事件被频繁触发，节流能减少时间触发的频率，因此，节流是有选择性的执行一部分事件。

应用场景：防抖： 输入框在用户输入完成之后再执行后续操作。用户没输入完的时候不操作。
        节流： 鼠标不断触发某事件时，只在单位时间内触发一次。


# Promise 解决地狱回调的问题；async/await 使用，异步过程同步化；
1. Promise是异步微任务，解决了异步多层嵌套回调的问题，让代码的可读性更高，更容易维护 Promise使用
2. Promise是ES6提供的一个构造函数，可以使用Promise构造函数new一个实例，Promise构造函数接收一个函数作为参数，这个函数有两个参数，分别是两个函数 `resolve`和`reject`，`resolve`将Promise的状态由等待变为成功，将异步操作的结果作为参数传递过去；`reject`则将状态由等待转变为失败，在异步操作失败时调用，将异步操作报出的错误作为参数传递过去。
3. 实例创建完成后，可以使用`then`方法分别指定成功或失败的回调函数，也可以使用catch捕获失败，then和catch最终返回的也是一个Promise，所以可以链式调用
Promise的特点：
1. 对象的状态不受外界影响
2. 一旦状态改变，就不会再变，任何时候都可以得到这个结果。
3. resolve 方法的参数是then中回调函数的参数，reject 方法中的参数是catch中的参数
4. then 方法和 catch方法 只要不报错，返回的都是一个fullfilled状态的promise

- async/await 是ES7提出的基于Promise的解决异步的最终方案
async 是一个加在函数前的修饰，被async定义的函数会默认返回一个promise对象resolve的值。因此对async函数可以直接then，返回的值就是then方法传入的值。
async/await使得异步代码看起来像同步代码。

- promise的缺点
1. 无法取消Promise，一旦新建它就会立即执行，无法中途取消
2. 如果不设置回调函数，promise内部抛出的错误，不会反应到外部
3. 当处于pending状态时，无法得知目前进展到哪一个阶段 （刚刚开始还是即将完成 ）

# v-for 和 v-if的优先级谁更高？
 1. 实践中不应该把v-for和v-if放一起
 2. 在vue2中，v-for的优先级高于v-if，把它们放在一起，输出的渲染函数可以看出会先执行循环再判断条件，哪怕我们只渲染列表中的一小部分元素，也得在每次渲染的时候遍历整个列表，这会比较浪费；另外需要注意的是在vue3中则完全相反，v-if的优先级高于v-for，所以v-if执行时，它调用的变量还不存在，就会导致异常。


 # Vue的生命周期以及每个阶段做的事
 1. 每个Vue组件实例呗创建后都会经过一系列初始化步骤，比如，它需要数据观测，模版编译，挂载实例到dom上，以及数据变化时更新dom。这个过程中会运行叫做生命周期钩子的函数，以便用户在特定阶段有机会添加他们自己的代码。
 2. Vue生命周期总共可以分为8个阶段：创建前后，载入前后，更新前后，销毁前后，以及一些特殊场景的生命周期。

 - beforeCreate：通常用于插件开发中执行一些初始化任务
 - created: 组件初始化完毕，可以访问各种数据，获取接口数据等
 - mounted: dom已创建，可用于访问数据的dom元素；访问子组件等。
 - beforeUpdate： 此时view层的更新，更新后，所有状态已是最新
 - beforeunmount： 实例被销毁前调用，可用于一些定时器或订阅的取消
 - unmounted： 销毁一个实例。可清理它与其他实例的连接，解绑它的全部指令及时间监听器

 # 双向绑定的使用和原理？


 # window常见事件、方法、属性
 - 常见事件： 
 1. window.onload(当文档内容完全加载完成会触发该事件(包括图像、脚本文件、CSS文件等)，就调用的处理函数。)  
 2. window.onresize(调整窗口大小加载事件，当触发时就调用的处理函数)   绑定方式： window.onresize = function(){} 或者 window.addEventListener('resize',function(){})


# box-sizing: content-box|border-box|inherit
- content-box: 设置了元素宽100px，那么任何的边框和内边距的宽度都会被算到最后绘制出来的元素宽度中（设置的宽度就是元素宽度，不包含边框和内边距的宽度）（标准盒模型）
- border-box：  设置的边框和内边距的宽度都包含在content中。（怪异盒模型）

# DOM事件流 （捕获和冒泡）
-  DOM事件的级别
1. DOM0的写法： element.onclick = function(){}
2. DOM1的写法： element.addEventListener('click',function(){},false)
3. DOM3的写法： element .addEventListener('keyup',function(){},false) 增加了很多事件类型，比如鼠标事件，键盘事件等。

- DOM事件流
讲的就是浏览器在于当前页面做交互时，这个事件是怎么传递到页面上的。

- 完整的事件流，分三个阶段
捕获：从window对象传到目标元素
目标阶段： 事件通过捕获，到达目标元素，这个阶段就是目标阶段。
冒泡： 从目标元素传到window对象。

说明：捕获阶段，事件依次传递的顺序是：window --> document --> html--> body --> 父元素、子元素、目标元素。

- Evevt对象方法
1. event.preventDefault() // 阻止默认事件（比如给<a>标签绑定了click事件，此时，如果给<a>设置了这个方法，就阻止了链接的默认跳转）
2. event.stopPropagation() || event.cancelBubble //阻止冒泡事件
3. event。stopImmediateProgation（） //设置优先级
4. event.currentTarget  // 事件委托 （指的是父元素，在父元素上绑定，影响子元素，操作一次dom，提高性能）
   event.target       // 当前被点击的元素，在事件委托中，指的是子元素
                     // 事件委托的核心原理：给父节点添加侦听器， 利用事件冒泡影响每一个子节点


# 解决样式冲突
1. 细化选择符
2. 再写一次选择器名
3. 改变CSS样式表中的顺序
4. 主动提升优先级（不建议）


# Vue2中组件为什么只能有一个根节点，为什么Vue3组件可以有多个根节点？
1. 在vue2中之所以这么做是因为vdom是一颗单根树形结构，patch方法在遍历的时候从根节点开始遍历，它要求只有一个根结点，组件也会转换为一个vdom，自然满足这个要求。
2. 在vue3中之所以可以有多个节点，是因为引入Fragment的概念，这是一个抽象的节点，如果发现组件有多个根，就创建一个Fragment节点，把多个根节点作为它的children，
   将来patch的时候，如果发现是一个Fragment节点，则直接遍历children创建或更新。
