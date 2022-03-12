---
title: Masimum SubArray
categories: LeetCode-Top100
tag: easy
---

- TOC
  {:toc}

### [문제 링크](https://leetcode.com/problems/maximum-subarray/)

### java

#### l1l1l1l1l1l1l1

```java
class Solution {
    public int maxSubArray(int[] nums) {
        int sum = nums[0];

        for (int i = 1; i < nums.length; i++) {
            nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
            sum = Math.max(sum, nums[i]);
        }

        return sum;
    }
}
```
#### study-jay

```java
class Solution {
    public int maxSubArray(int[] nums) {
        int answer = Integer.MIN_VALUE;
        int sum = 0;
        for (int i = 0; i < nums.length; i++) {
            sum = Math.max(nums[i], sum + nums[i]);
            answer = Math.max(answer, sum);
        }

        return answer;
    }
}
```

### javascript

#### jinah92

```javascript
var maxSubArray = function (nums) {
  nums.forEach((num, idx) => {
    if (nums[idx - 1] > 0) nums[idx] += nums[idx - 1];
  });
  return Math.max(...nums);
};
```
