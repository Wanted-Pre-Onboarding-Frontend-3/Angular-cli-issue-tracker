# 원티드 프리온보딩 3주차 과제

<br>

- 원티드 프리온보딩 프론트엔드 코스 6기 3-1 과제(띵스플로우)

- 과제 목표 : 특정 깃헙 레파지토리의 이슈 목록과 상세 내용을 확인하는 웹 사이트 구축

- 수행 기간 : 2022/09/13 ~ 2022/09/15

<br><br>

# 배포 링크

- [링크](http://angular-cli-issue-tracker.s3-website.ap-northeast-2.amazonaws.com )

<br><br>

# 목차

- [원티드 프리온보딩 3주차 과제](#원티드-프리온보딩-3주차-과제)
- [배포 링크](#배포-링크)
- [목차](#목차)
- [3팀 소개 및 역할](#3팀-소개-및-역할)
- [기술 스택](#기술-스택)
- [와이어프레임](#와이어프레임)
- [실행방법](#실행방법)
- [프로젝트 구조](#프로젝트-구조)
- [라우팅](#라우팅)
- [과제 요건 및 구현 내용](#과제-요건-및-구현-내용)
  - [과제 요건](#과제-요건)
  - [0. 공통기능 (로딩표시, 인피니티 스크롤)](#0-공통기능-로딩표시-인피니티-스크롤)
  - [1. 메인페이지 (/)](#1-메인페이지-)
  - [2. 상세페이지 (/issue/:issueNumber)](#2-상세페이지-issueissuenumber)
  - [3. Context API를 활용한 API 연동](#3-context-api를-활용한-api-연동)
  - [4. UI 및 에러 화면](#4-ui-및-에러-화면)
- [컨벤션 링크](#컨벤션-링크)

<br><br>

# 3팀 소개 및 역할

| 이름   | 역할       |
| ------ | ---------- |
| 김리후 | Context API, 배포 |
| 이경준 |            |
| 이혜성 | **팀장** / 초기 셋팅, 로딩표시, 인피니트  |
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
<br>

2. set environment variables

   1. package.json과 같은 디렉토리에 .env.local 파일을 생성합니다.

   2. .env.local 파일 안에 아래와 같이 작성합니다.

```
 REACT_APP_API_HOST=https://api.github.com/repos/angular/angular-cli/issues
```
<br>

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

- `/` : 메인페이지

- `/issue/:issueNumber` : 상세페이지

<br><br>

# 과제 요건 및 구현 내용

## 과제 요건


```
- 필수 사항

  - 이슈 목록 및 상세 화면 기능 구현
  - Context API를 활용한 API 연동
  - 지정된 조건(open 상태, 코멘트 많은 순)에 맞게 데이터 요청 및 표시
  - 데이터 요청 중 로딩 표시
  - UI는 데스크톱, 모바일에서 보았을 때 모두 읽기 편하게 구현


- 선택 사항

  - 에러 화면 구현
  - CSS-in-JS 구현
```

<br>

1. 이슈 목록 화면

   - 이슈 목록 가져오기 API 활용
   - open 상태의 이슈 중 코멘트가 많은 순으로 정렬
   - 각 행에는 ‘이슈번호, 이슈제목, 작성자, 작성일, 코멘트수’를 표시
   - 다섯번째 셀에는 광고 이미지 출력, 광고 이미지 클릭 시 [https://thingsflow.com/ko/home](https://thingsflow.com/ko/home)로 이동
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

## 0. 공통기능 (로딩표시, 인피니트 스크롤)

- 구현한 내용
  - 인피니트 스크롤:
    - Intersection Observer API를 이용한 useIntersect 훅 구현, ref를 반환함.
    - 이슈목록을 보여주는 메인페이지에서 임의의 Target div에 ref 사용
    - onIntersect 핸들러로 다음페이지 호출
    - 다음페이지 호출때 클로져를 이용한 getNextPage() 함수 사용
    - 마지막 페이지 예외처리

  - 로딩표시:
    - Spinner 컴포넌트 구현
    - 인피니트 스크롤 로딩시 Spinner 표시

<br>

- 고민했던 내용
  - 인피니트 스크롤때 다음 두 페이지를 fetching하는 문제가 있으나 해결하지 못함.

<br>

## 1. 메인페이지 (/)

- 구현한 내용

<br>

- 고민했던 내용

<br>

## 2. 상세페이지 (/issue/:issueNumber)

- 구현한 내용

<br>

- 고민했던 내용

<br>

## 3. Context API를 활용한 API 연동

- 구현한 내용
  - Context API를 활용하여 공통으로 사용하게 될 api 로직 및 기본 state 값 구현
  - 공통 type 지정
  
<br>

- 고민했던 내용
  - 다른 컴포넌트에서 사용하게 될 공통 로직이 어떤 것일까 고민.
  - axios instance를 별도의 api 폴더에 구현하려 하였으나, 한 곳에 관심사를 모으기 위해 context api 내부로 이동.
  - 활용하기 쉽게 api 요청을 아래와 같이 객체로 묶었으나, 결과적으로 `getIssueDetailApi`는 사용되지 않을 것이라 판단하여 삭제.

    ```ts
      const api = {
        getIssueApi: (config?: AxiosRequestConfig) =>
          axiosInstance.get(`${BASE_URL}`, config).then((response) => response.data),
        getIssueDetailApi: (issueNumber: number) =>
          axiosInstance.get(`${BASE_URL}/${issueNumber}`).then((response) => response.data),
      };
    ```
<br>

## 4. UI 및 에러 화면

- 구현한 내용

<br>

- 고민했던 내용


<br><br>

# 컨벤션 링크

[링크](https://sunhwaday.notion.site/c0ff2ba4723c42a289ab9021e8aa95ba)
