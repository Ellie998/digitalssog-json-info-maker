# 디지털쏙 프로젝트 description JSON data 생성기


- 목적 : 디지털쏙 프로젝트의 description JSON data 생성 불편함을 개선하고자 했다.
- 배포 : https://digitalssog-data-maker.netlify.app
- 미리보기
  
<img width="1287" alt="스크린샷 2024-03-22 오후 7 16 05" src="https://github.com/Ellie998/digitalssog-json-info-maker/assets/89681100/d9c98132-1689-41c5-b3a2-5703909afd83">

## 설명
### [new 기능] 버튼을 누르면
아래의 정보를 입력할 수 있는 form이 보여진다.
> 1. functionName 작성
> 2. app 이름 선택
> 3. charateristic 작성

form의 정보를 입력하고 [생성] 버튼을 누르면 아래 형태와 동알한 JSON 데이터가 생성된다.
```
"name": "",
"app": [""],
"charateristic": ""
```

### [new method] 버튼을 누르면
아래의 정보를 입력할 수 있는 form이 보여진다.
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



form의 정보를 입력하고 [생성] 버튼을 누르면 아래 형태와 동알한 JSON 데이터가 생성된다.
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

## 사용 라이브러리
"@emotion/styled": "^11.11.0",

"react": "^18.2.0",

"react-dom": "^18.2.0",

"react-scripts": "5.0.1",
