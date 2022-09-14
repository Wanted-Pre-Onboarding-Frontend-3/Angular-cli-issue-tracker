# 원티드 프리온보딩 3주차 과제

<br><br>

# 소개

- 원티드 프리온보딩 프론트엔드 코스 6기 3-1 과제(띵스플로우)

- 과제 목표 : 특정 깃헙 레파지토리의 이슈 목록과 상세 내용을 확인하는 웹 사이트 구축

- 수행 기간 : 2022/09/13 ~ 2022/09/15

<br><br>

# 배포 링크

- [링크](http://tmdb-team-3.s3-website.ap-northeast-2.amazonaws.com/)

<br><br>

# 목차

- [원티드 프리온보딩 3주차 과제](#원티드-프리온보딩-3주차-과제)
- [소개](#소개)
- [배포 링크](#배포-링크)
- [목차](#목차)
- [3팀 소개 및 역할](#3팀-소개-및-역할)
- [기술 스택](#기술-스택)
- [와이어프레임](#와이어프레임)
- [실행방법](#실행방법)
- [프로젝트 구조](#프로젝트-구조)
- [라우팅](#라우팅)
- [과제 요건 및 구현 방법](#과제-요건-및-구현-방법)
  - [과제 요건](#과제-요건)
  - [0. 공통기능](#0-공통기능)
  - [1. 메인페이지 (/)](#1-메인페이지-)
  - [2. 상세페이지 (/issue/:issueNumber)](#2-상세페이지-issueissuenumber)
  - [3.](#3)
  - [4.](#4)
  - [5.](#5)
- [컨벤션 링크](#컨벤션-링크)

<br><br>

# 3팀 소개 및 역할

| 이름   | 역할       |
| ------ | ---------- |
| 김리후 |            |
| 이경준 |            |
| 이혜성 | **팀장** / |
| 문선화 |            |
| 홍성준 |            |

<br><br>

# 기술 스택

- React, JavaScript, TypeScript

- styled-components

- Axios, Context API

<br><br>

# 와이어프레임

<img src="https://user-images.githubusercontent.com/81549337/190062017-7935c1f8-0ef5-423d-9192-6e4fe050acb9.png" width="600">

<br><br>

# 실행방법

1. Install

```bash
 $ yarn install
```

2. set environment variables

   1.

   2. package.json과 같은 디렉토리에 .env.local 파일을 생성합니다.

   3. .env.local 파일 안에 아래와 같이 작성합니다.

```
 REACT_APP_API_HOST = 'https://api.github.com/angular/angular-cli.git/issues'
```

3. start the project

```
 $ yarn start
```

<br><br>

# 프로젝트 구조

<details>

<summary>프로젝트 구조</summary>

```

```

</details>

<br><br>

# 라우팅

- / : 메인페이지

- /issue/:issueNumber : 상세페이지

<br><br>

# 과제 요건 및 구현 방법

## 과제 요건

- 필수 사항

  - 이슈 목록 및 상세 화면 기능 구현
  - Context API를 활용한 API 연동
  - 지정된 조건(open 상태, 코멘트 많은 순)에 맞게 데이터 요청 및 표시
  - 데이터 요청 중 로딩 표시
  - UI는 데스크톱, 모바일에서 보았을 때 모두 읽기 편하게 구현

<br>

- 선택 사항

  - 에러 화면 구현
  - CSS-in-JS 구현

<br><br>

- movies / 리스트 페이지

  - 한번에 가져올 데이터 최대 20

  - 제목, 포스터, 별점 표시

  - 포스터 없는 경우, 대체 이미지 사용

<br>

1. 이슈 목록 화면

- 이슈 목록 가져오기 API 활용
- open 상태의 이슈 중 코멘트가 많은 순으로 정렬
- 각 행에는 ‘이슈번호, 이슈제목, 작성자, 작성일, 코멘트수’를 표시
- 다섯번째 셀에는 광고 이미지 출력
  - 광고 이미지 클릭 시 [https://thingsflow.com/ko/home](https://thingsflow.com/ko/home)로 이동
- 화면을 아래로 스크롤 할 시 이슈 목록 추가 로딩(인피니티 스크롤)

<br>

2. 이슈 상세 화면

- 이슈의 상세 내용 표시
- ‘이슈번호, 이슈제목, 작성자, 작성일, 코멘트 수, 작성자 프로필 이미지, 본문' 표시

<br>

3. 공통 헤더

- 두 페이지는 공통 헤더를 공유합니다.
- 헤더에는 Organization Name / Repository Name이 표시됩니다.

<br><br>

## 0. 공통기능

- 구현한 점

- 개선해야 할 점

<br>

## 1. 메인페이지 (/)

- 구현한 점

  <br>

- 개선해야 할 점

<br>

## 2. 상세페이지 (/issue/:issueNumber)

- 구현한 점

- 개선해야 할 점

<br>

## 3.

- 구현한 점
- 개선해야 할 점

<br>

## 4.

- 구현한 점

- 개선해야 할 점

<br>

## 5.

- 구현한 점
- 개선해야 할 점

<br><br>

# 컨벤션 링크

[링크](https://sunhwaday.notion.site/c0ff2ba4723c42a289ab9021e8aa95ba)
