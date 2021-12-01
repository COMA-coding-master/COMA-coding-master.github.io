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

### 4. Jekyll Server 실행
현재 로컬소스의 블로그 화면을 livereload로 확인 가능
```
bundle install
bundle exec jekyll serve --livereload
```

## 컨벤션 규칙
1. 업로드할 포스트 경로는 _posts 하위 폴더에 작업
2. 게시글 파일 네이밍 규칙
    - 연도-월-일-주제.md


[1]: https://jekyllrb.com/