---
title: Merge Two Sorted Lists
categories: LeetCode-Top100
tag: easy
---

- TOC
  {:toc}

### [문제 링크](https://leetcode.com/problems/merge-two-sorted-lists/)

### python

#### sjw96007

```python
# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def mergeTwoLists(self, list1, list2):
        """
        :type list1: Optional[ListNode]
        :type list2: Optional[ListNode]
        :rtype: Optional[ListNode]
        """
        now_node = ListNode(0)
        next_node = now_node
        while list1 and list2:
            if list1 and list1.val <= list2.val:
                next_node.next = list1
                list1 = list1.next
            else:
                next_node.next = list2
                list2 = list2.next
            next_node = next_node.next
        if list1 != None:
            next_node.next = list1
        else:
            next_node.next = list2
        return now_node.next
```
### java

#### l1l1l1l1l1l1l1

```java
import java.util.*;
class Solution {
    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        if (l1 == null) {
            return l2;
        }
        if (l2 == null) {
            return l1;
        }

        ListNode firstNode = new ListNode(0);
        ListNode nextNode = firstNode;

        while (l1 != null && l2 != null) {
            if (l1.val > l2.val) {
                nextNode.next = l2;
                l2 = l2.next;
            } else {
                nextNode.next = l1;
                l1 = l1.next;
            }
            nextNode = nextNode.next;
        }

        if (l1 == null) {
            nextNode.next = l2;
        }
        if (l2 == null) {
            nextNode.next = l1;
        }

        return firstNode.next;

    }
}
```

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
