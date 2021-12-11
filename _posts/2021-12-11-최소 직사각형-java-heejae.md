---
title: 최소 직사각형
tags: java
categories: weekly-challenge
author: heejae Han
---

* TOC
{:toc}

### [최소직사각형](https://programmers.co.kr/learn/courses/30/lessons/86491){:target="_blank"}


### 풀이내용

### 1. Java
``` java
class Solution {
    public int solution(int[][] sizes) {
         int answer = 0;

        // 내림차순정렬
        for(int i = 0; i < sizes.length; i++){
            int[] temp = sizes[i];
            if(temp[0]<temp[1]){
                int num = temp[0];
                temp[0] = temp[1];
                temp[1] = num;

                sizes[i] = temp;
            }

        }

        //너비 높이 최대값 구하기
        int maxWidth = sizes[0][0];
        for(int i = 0; i < sizes.length-1; i++){
            if(maxWidth < sizes[i+1][0]){
                maxWidth = sizes[i+1][0];
            }
        }

        int maxHeight = sizes[0][1];
        for(int i = 0; i < sizes.length-1; i++){
            if(maxHeight < sizes[i+1][1]){
                maxHeight = sizes[i+1][1];
            }
        }

        answer = maxHeight * maxWidth;
        
        return answer;
    }
}

```
