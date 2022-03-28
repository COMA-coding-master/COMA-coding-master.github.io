---
title: Climbing Stairs
categories: LeetCode-Top100
tag: easy
---

- TOC
  {:toc}

### [문제 링크](https://leetcode.com/problems/climbing-stairs/)

### python

#### jinah92

```python
class Solution:
    def climbStairs(self, n: int) -> int:
        if n <= 2:
            return n
        a, b = 1, 2
        for _ in range(3, n+1):
            a, b = b, a + b
        return b
```
