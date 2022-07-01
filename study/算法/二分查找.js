// 二分查找 找到第一个5和最后一个5

let arr = [0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 9]
// let arr =[1,2,3,4,5,6]

function binarySearch(arr,target){
    let len = arr.length
    let left =0
    let right = len -1 
    let i =1
    while(left <=  right){
        let mid = Math.floor((left + right)/ 2 )
        console.log(`第${i++}趟的左边界`,left);
        console.log(`第${i++}趟的中间边界`,mid);
        console.log(`第${i++}趟的右边界`,right);
        console.log('----------------------------');
        if(arr[mid] === target){
            console.log(mid);
            // return mid
            // 如果找到了，再判断是不是左边界，如果是，说明是第一个
            // 如果不是 ，收缩右边界，向前逼近，更靠近第一个
            if(left == mid){
                return mid
            }else{
                right = mid 
            }
        }else if(arr[mid]<target){
            left = mid + 1
        }else{
            right = mid -1 
        }
    }
}

binarySearch(arr,5)
// console.log(binarySearch(arr,5)); // 4