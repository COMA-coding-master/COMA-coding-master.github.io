---
title: Merge Two Sorted Lists
categories: LeetCode-Top100
tag: easy
---

- TOC
  {:toc}

### [문제 링크](https://leetcode.com/problems/merge-two-sorted-lists/)

### javascript

#### jinah92

```javascript
var mergeTwoLists = function (list1, list2) {
  let targetNode = null;
  let newNode;

  while (list1 !== null || list2 !== null) {
    let firstVal;
    if (list1 !== null && list2 !== null) {
      // 둘 다 null이 아님
      firstVal = Math.min(list1.val, list2.val);
      if (list1.val === list2.val) {
        newNode = new ListNode(firstVal, new ListNode(firstVal));
        list1 = list1.next;
        list2 = list2.next;
      } else {
        newNode = new ListNode(firstVal);
        if (list1.val === firstVal) {
          list1 = list1.next;
        } else {
          list2 = list2.next;
        }
      }
    } else {
      // 둘 중 하나가 null
      firstVal = list1 !== null ? list1.val : list2.val;
      newNode = new ListNode(firstVal);
      if (list1) {
        list1 = list1.next;
      } else {
        list2 = list2.next;
      }
    }

    if (targetNode === null) {
      targetNode = newNode;
      continue;
    }
    let currentNode = targetNode;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  }
  return targetNode === null ? list1 : targetNode;
};
```
