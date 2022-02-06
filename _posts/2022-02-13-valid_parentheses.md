---
title: Valid Parentheses
categories: Top100
tag: easy
---

- TOC
  {:toc}

### [문제 링크](https://leetcode.com/problems/valid-parentheses/)

### javascript

#### jinah92

```javascript
var isValid = function (s) {
  let queue = [];
  let hash = {
    "}": "{",
    ")": "(",
    "]": "[",
  };

  for (let i = 0; i < s.length; i++) {
    if (["(", "{", "["].indexOf(s[i]) !== -1) {
      queue.push(s[i]);
    } else {
      if (queue.slice(-1)[0] !== hash[s[i]]) {
        return false;
      }
      queue.pop();
    }
  }
  if (queue.length) return false;
  return true;
};
```
