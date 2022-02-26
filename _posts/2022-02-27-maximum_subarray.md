---
title: Masimum SubArray
categories: LeetCode-Top100
tag: easy
---

- TOC
  {:toc}

### [문제 링크](https://leetcode.com/problems/maximum-subarray/)

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
