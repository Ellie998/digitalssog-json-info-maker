# json 파일 생성기
=============

- 목적 : 편리하게 디지털쏙 기능 설명을 위한 json 데이터를 생성하기 위해서 만들었다.
- 기능 :
- url : https://digitalssog-data-maker.netlify.app

<img width="1287" alt="스크린샷 2024-03-22 오후 7 16 05" src="https://github.com/Ellie998/digitalssog-json-info-maker/assets/89681100/d9c98132-1689-41c5-b3a2-5703909afd83">


### [new 기능] 버튼을 누르면

> 1. functionName 작성
> 2. app 이름 선택
> 3. charateristic 작성

```
"name": "",
"app": [""],
"charateristic": ""
```

### [new method] 버튼을 누르면

> 1. 카테고리 선택
> 2. functionName 선택
> 3. method app 선택
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
