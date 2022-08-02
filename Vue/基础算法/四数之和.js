// 示例 1：

// 输入：nums = [1,0,-1,0,-2,2], target = 0
// 输出：[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

// 方法：双层for循环加双指针 o3的时间复杂度

var fourSum = function (nums, target) {
  if (nums.length < 4) {
    return [];
  }
  let len = nums.length;
  let res = [];
  nums.sort((x, y) => x - y);
  for (let i = 0; i < len - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {   
      continue;
    }
    if (nums[i] + nums[len - 3] + nums[len - 2] + nums[len - 1] < target) {  // 用一些提前判断来减少时间复杂度
      continue;
    }
    if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) {
      break;
    }
    for (let j = i + 1; j < len - 2; j++) {
      if (i + 1 < j && nums[j] === nums[j - 1]) {
        continue;
      }
      if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) {
        break;
      }
      if (nums[i] + nums[j] + nums[len - 2] + nums[len - 1] < target) {
        continue;
      }
      let left = j + 1,
        right = len - 1;
      while (left < right) {
        const add = nums[i] + nums[j] + nums[left] + nums[right];
        if (add === target) {
          res.push([nums[i], nums[j], nums[left], nums[right]]);
          while (left < right && nums[left] === nums[left + 1]) {
            left++;
          }
          left++;
          while (left < right && nums[right] === nums[right - 1]) {
            right--;
          }
          right--;
        } else if (add < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }
  return res;
};
