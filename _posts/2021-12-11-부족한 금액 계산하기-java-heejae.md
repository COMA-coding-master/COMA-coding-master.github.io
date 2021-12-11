---
title: 부족한 금액 계산하기
tags: java
categories: weekly-challenge
author: Heejae Han
---

* TOC
{:toc}

### [부족한 금액 계산하기](https://programmers.co.kr/learn/courses/30/lessons/82612){:target="_blank"}


### 풀이내용

``` java
class Solution {
    public long solution(int price, int money, int count) {
        
        long answer = -1;
        long sum = 0;

        for(int i = 1; i <= count; i++){
                sum += price * i;
        }

        answer = sum - money;

        // 금액이 부족하지 않을 경우 
        if(answer < 0){
            answer = 0;
        }

        return answer;
    }
}
```
