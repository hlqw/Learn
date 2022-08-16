// 输入: s = "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

// 思路：用一个set保存 ，循环判断set是否有，没有则存入set，同时更新最大set的长度。如果有则进入else，while循环删除头部的字符串，直到删除掉重复的，然后存入新的字符串重新计数。

var lengthOfLongestSubstring = function(s) {
    let set = new Set()
     if(s.length===0) return 0
    let i =0,j=0,maxLength=0;
    for( i= 0;i<s.length;i++){
        if(!set.has(s[i])){
            set.add(s[i])
            maxLength = Math.max(maxLength,set.size);
        }else{
            while(set.has(s[i])){  // 如果有，则循环删除直到删除掉重复的字符。
                 set.delete(s[j])
                j++
            }
            set.add(s[i])
        }
    }
    return maxLength
};