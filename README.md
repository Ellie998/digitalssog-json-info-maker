# json 파일 생성기
https://digitalssog-data-maker.netlify.app
=============

- 목적 : 편리하게 json 데이터를 조작하기 위해서
- 기능 :

### 새로운 기능 설명 추가하기 버튼을 누르면

> 1. functionName 선택 / 추가 가능하게
> 2. app 이름 선택 가능하게 / 추가 가능하게
> 3. charateristic 작성

```
"name": "",
"app": [""],
"charateristic": ""
```

### 새로운 설명 method 추가하기 버튼을 누르면

> 1. 카테고리 선택
> 2. functionName 선택 / 추가 가능하게
> 3. method app 선택 / 추가 가능하게 (여기서 작성된 app name들이 기능을 제공하는 앱 배열에 자동 등록됨)
> 4. methodNum 선택
> 5. method content 작성
>    > - 여러개의 input box를 만들어서 잘 구분해서 작성할 수 있도록 하기

- 요구 조건
  > 1. name
  > 2. app : array
  > 3. charateristic
  > 4. method
  >    > 1. methodAppName
  >    > 2. methodNum
  >    > 3. methodTitle
  >    > 4. methodContent

```
 {
    "category": "",
    "objects": [
      {
        "name": "",
        "app": [""],
        "charateristic": "",
        "method": [
          {
            "methodAppName": "",
            "howto": [
              {
                "methodNum": 1,
                "methodTitle": "",
                "methodContent": []
              }
            ]
          }
        ]
      }
    ]
  }
```

사용 라이브러리
"@emotion/styled": "^11.11.0",
"@testing-library/jest-dom": "^5.17.0",
"@testing-library/react": "^13.4.0",
"@testing-library/user-event": "^13.5.0",
"react": "^18.2.0",
"react-dom": "^18.2.0",
"react-scripts": "5.0.1",
