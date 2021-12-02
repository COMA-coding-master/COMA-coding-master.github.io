# COMA Project

to ba a coding master

join your self!

## Setup
### 1. git clone
```
git clone https://github.com/COMA-coding-master/COMA-coding-master.github.io.git
```

### 2. Ruby 설치

#### (1) Ruby 버전 확인 (구버전의 Ruby 설치됨)
```
ruby -v
```
#### (2) RVM 설치
```
\curl -sSL https://get.rvm.io | bash -s stable
```
#### (3) Ruby 2.6.6 버전 설치
```
rvm install ruby-2.6.6
```
#### (4) Ruby 버전 세팅
```
rvm use ruby-2.6.6
rvm --default use 2.6.6
```

### 3. [Jekyll][1] 설치
#### (1) zlib 패키지 설치
```
rvm pkg install zlib
```
#### (2) rvm 패키지 재설치
```
rvm reinstall —force
```
#### (3) Jekyll 및 관련 패키지 설치
```
gem install bundler rdoc jekyll
```

### 4. Jekyll bundle 생성 (최초 1회 실행)
```
bundle install
```
### 5. Jekyll 서버 기동 (livereload)
내용 업데이트 감지 시마다 live reload
```
bundle exec jekyll serve --livereload
```

## 스터디 규칙
1. 문제 풀이 사이트는 [프로그래머스](https://programmers.co.kr/){:target="_blank"}로 한다 (미정)
2. 매주 일요일 11시 59분까지 3문제 이상의 문제 풀이를 수행하여 포스트 업로드한다
3. 풀이하고자 하는 문제 유형(또는 문제이름)은 매주 월요일 11시 59분까지 스터디방에 공유하거나 github issue 를 새로 생성한다
 

## 컨벤션 규칙
1. 업로드할 포스트 경로는 _posts 하위 폴더에 작업
    
    - 게시글 파일 네이밍 규칙 : 연도-월-일-문제명.md
    - 게시글 내용 규칙 :
        1. 상단에 **_title_**, **_tags_**, **_categories_**, **_author_** 명시 (샘플파일 참고)
        2. toc은 **_문제이름 및 사이트명 (링크 포함)_**, **_문제 개요_**, **_제약사항(있는 경우)_**, **_풀이내용(code block)_** 으로 구분
    - categroies는 문제유형을 반드시 영문으로 작성 (한글 작성시, 필터링 안됨)




[1]: https://jekyllrb.com/