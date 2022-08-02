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