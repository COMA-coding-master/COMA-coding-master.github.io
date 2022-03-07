---
title: Remove Duplicates from Sorted Array
categories: LeetCode-Top100
tag: easy
---

- TOC
  {:toc}

### [문제 링크](https://leetcode.com/problems/remove-duplicates-from-sorted-array)

### javascript

#### jinah92

```javascript
var removeDuplicates = function (nums) {
  let lastNum = -101;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === lastNum) {
      nums.splice(i, 1);
      i -= 1;
      continue;
    }
    lastNum = nums[i];
  }
  return nums.length;
};
```

### java

### kumsil1006

```java
class Solution {
    public int removeDuplicates(int[] nums) {
        int idx = 0;

        for(int i = 0; i < nums.length; i++) {
            if(idx == 0 || nums[i] != nums[idx-1]) {
                nums[idx++] = nums[i];
            }
        }
        return idx;
    }
}
```