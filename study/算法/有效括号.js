// @ts-nocheck
// s = "{[()]}" 判断是否为有效字符

// 1.暴力消除法
const isValid = (s) => {
  while (true) {
    let len = s.length;
    s = s.replace("()", "").replace("{}", "").replace("[]", "");
    if (len === s.length) {
      return len === 0;
    }
  }
};

let ss = "{[()]}";
console.log(isValid(ss)); // true

// 入栈法
const isValid_1 = (s) => {
  const map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      stack.push(s[i]);
    } else {
      if (!stack.length || map[stack.pop() !== s[i]]) {
        return false;
      }
    }
  }
  return !stack.length;
};
console.log(isValid_1(ss)); //true
