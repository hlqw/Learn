const m1 = new Map([['a', 111], ['b', 222]])
console.log(m1); //Map(2) { 'a' => 111, 'b' => 222 }
console.log(m1.size); // 返回键值对的数量 2

console.log(m1.get('a')); //111

m1.set('c', 333); // Map(3) { 'a' => 111, 'b' => 222, 'c' => 333 }
console.log(m1);
console.log(m1.has('c')); //true


 // keys()
for (let key of m1.keys()) {
    console.log(key); // a b c
}

// values（）
for (let value of m1.values()) {
    console.log(value); // 111 222 333 
}

// entries()
for (let entrie of m1.entries()) {
    console.log(entrie); // [ 'a', 111 ] [ 'b', 222 ] [ 'c', 333 ]
}

// forEach()
for (let item of m1) {
    console.log(item); // [ 'a', 111 ] [ 'b', 222 ] [ 'c', 333 ]
}