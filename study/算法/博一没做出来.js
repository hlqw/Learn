// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，
// 并返回它们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
// 你可以按任意顺序返回答案。

// [2,7,9,5] target=9    输出：[0,1]
// [2,3,4]   target=6    输出：[1,2]

// 1.双层暴力循环
// const two_num =(nums,target)=>{
//         let len = nums.length
//         for(let i=0;i<len;i++){
//             for(let j=i+1;j<len;j++){
//                 if(nums[i] + nums[j] ===target){
//                     return [i,j]
//                 }
//             }
//         }
// }

// 2. map 降低时间复杂度
// const two_num =(nums,target) =>{
//     let map = new Map()
//     let len = nums.length
//     for(let i=0;i<len;i++){
//         if(map.has(target-nums[i])){
//             return [map.get(target-nums[i]),i]
//         }
//         map.set(nums[i],i)
//     }
//     return []
// }
// let arr = [2,7,9,5]
// console.log(two_num(arr,9));
