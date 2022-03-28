---
title: Valid Parentheses
categories: LeetCode-Top100
tag: easy
---

- TOC
  {:toc}

### [문제 링크](https://leetcode.com/problems/valid-parentheses/)

### python

#### sjw96007

```python
class Solution(object):
    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
        """
        answer = False
        while s:
            chk = len(s)
            s = s.replace('()', '').replace('{}', '').replace('[]', '')
            if chk == len(s):
                break
        if len(s) == 0:
            answer = True
        return answer
```

### java

#### l1l1l1l1l1l1l1

```java
class Solution {
    public boolean isValid(String s) {
        Map<Character, Character> map = Map.of(')', '(', '}', '{', ']', '[');
        Stack<Character> stack = new Stack<>();

        for (int i = 0; i < s.length(); i++){
            char c = s.charAt(i);
            if (c == '(' || c == '{' || c == '[') {
                stack.push(c);
            } else if (stack.isEmpty() || stack.pop() != map.get(c)) {
                return false;
            }
        }

        return stack.isEmpty();
    }
}
```

#### study-jay

```java
class Solution {
    public boolean isValid(String s) {
        boolean answer = false;
        Stack<Character> stack = new Stack<>();

        for (char c : s.toCharArray()) {
            if(stack.empty()){
                stack.add(c);
            } else {
                char peek = stack.peek();
                if(peek == '[' && c == ']' || peek == '(' && c == ')' || peek == '{' && c == '}'){
                    stack.pop();
                } else {
                    stack.add(c);
                }
            }
        }
        if(stack.empty()) answer = true;

        return answer;
    }
}
```

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
