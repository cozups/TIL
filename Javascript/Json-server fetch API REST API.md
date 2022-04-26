# Json-server / fetch API / REST API

# Json-server

json 파일을 사용하여 간단한 시뮬레이션을 위한 REST API Mock server를 구축할 수 있는 툴

# **AJAX (Asynchronous Javascript And XML)**

**자바스크립트를 통해서 서버에 데이터를 비동기 방식으로 요청하는 것**

AJAX라는 네트워크 기술을 이용하여 **클라이언트에서 서버로 데이터를 요청**
하고 그에 대한 **결과를 돌려받을 수 있다.**

## 비동기 방식

**웹페이지를 리로드하지 않고 데이터를 불러오는 방식**

Ajax를 통해서 서버에 요청을 한 후 멈추어 있는 것이 아니라 그 프로그램은 계속 돌아간다는 의미를 내포하고 있다.

### 비동기 방식의 장점

페이지 리로드 → 전체 리소스를 다시 불러와야 함 → 불필요한 리소스 낭비

비동기 방식 → 필요한 부분만 불러와 사용

## AJAX를 사용하는 이유

HTTP 프로토콜은 클라이언트 쪽에서 Request를 보내고 서버쪽에서 Response를 받으면 이어졌던 연결이 끊기게 되어있다. 그래서 화면의 내용을 갱신하기 위해서는 다시 request를 하고 response를 하며 페이지 전체를 갱신하게 된다. 하지만 이렇게 할 경우, 엄청난 자원 낭비와 시간 낭비를 초래하고 말 것이다.

AJAX는 HTML 페이지 전체가 아닌 일부분만 갱신할 수 있도록 XMLHttpRequest객체를 통해 서버에 request한다. 이 경우, **JSON이나 XML형태로 필요한 데이터만 받아 갱신하기 때문에 그 만큼의 자원과 시간을 아낄 수 있다.**

# fetch API

`fetch()`함수는 첫번째 인자로 URL, 두번째 인자로 옵션 객체를 받고, Promise 타입의 객체를 반환합니다. 반환된 객체는, API 호출이 성공했을 경우에는 응답(response) 객체를 resolve하고, 실패했을 경우에는 예외(error) 객체를 reject합니다.

```jsx
fetch('json 파일 또는 address')
	.then(response => response.json()) // 타입 결정 - json, text
	.then(data => ... )  // 데이터 전달받음
```

### json.parse()

JSON 문자열 → JavaScript 값이나 객체

```jsx
const str = `{
  "name": "홍길동",
  "age": 25,
  "married": false,
  "family": { "father": "홍판서", "mother": "춘섬" },
  "hobbies": ["독서", "도술"],
  "jobs": null
}`;

const obj = JSON.parse(str);

console.log(obj);

/*
{
    name: "홍길동",
    age: 25,
    married: false,
    family: {
        father: "홍판서",
        mother: "춘섬"
    },
    hobbies: [
        "독서",
        "도술"
    ],
    jobs: null
}
*/
```

### json.stringify()

JavaScript 값이나 객체 → JSON 문자열로 변환

```jsx
const obj = {
  name: "홍길동",
  age: 25,
  married: false,
  family: {
    father: "홍판서",
    mother: "춘섬",
  },
  hobbies: ["독서", "도술"],
  jobs: null,
};

const str = JSON.stringify(obj);

console.log(str);

/*
'{"name":"홍길동","age":25,"married":false,"family":{"father":"홍판서","mother":"춘섬"},"hobbies":["독서","도술"],"jobs":null}'
*/
```

# REST API

| CRUD |        | Method |
| ---- | ------ | ------ |
| C    | create | POST   |
| R    | read   | GET    |
| U    | update | PUT    |
| D    | delete | DELETE |

GET

```jsx
fetch("/data.json")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
```

POST

```jsx
fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
```
