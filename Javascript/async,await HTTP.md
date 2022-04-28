# async,await / HTTP

Promise를 활용한 비동기 코드를 간결하게 작성하는 문법

`async` / `await` 를 통해 비동기 코드를 동기 코드처럼 간결하게 작성할 수 있다.

- `await` 키워드는 반드시 `async` 함수 내에서 사용해야 한다.
- `async` 함수는 반드시 Promise를 반환한다.

```jsx
async function asyncFunc() {
  let data = fetchData();
  let user = fetchUser(data);
  return user;
}
```

```jsx
function fetchData1() {
  return request()
    .then(response => response.requestData)
    .catch(error => {
      // error 발생
    });
}
```

Promise를 리턴하는 함수의 경우, `catch` 메소드를 통해 에러를 처리할 수 있다.

```jsx
async function asyncFunc() {
  try {
    let data1 = await fetchData1();
    return fetchData2(data1);
  } catch (e) {
    console.log("실패: ", e);
  }
}
```

`try-catch` 구문으로 `async/await` 형태 비동기 코드 에러 처리가 가능하다.

# HTTP

**클라이서버 프로토콜**

Web에서 서버-클라이언트 간 통신 방법을 정한 것

![Untitled](https://joshua1988.github.io/images/posts/web/http/request-response.png)

서버와 클라이언트가 요청을 보내기 전까지 대응하지 않음.

서버와 클라이언트 사이에는 무수히 많은 요소가 존재하며 http는 이런 존재들 사이의 통신 방법을 규정한다.

- 요청(requests): 클라이언트에 의해 전송되는 메시지
- 응답(responses): 서버에서 응답으로 전송되는 메시지

![Untitled](https://mdn.mozillademos.org/files/13677/Fetching_a_page.png)

## HTTP message

![Untitled](https://mdn.mozillademos.org/files/13827/HTTPMsgStructure2.png)

- 서버 주소, 요청 메서드, 상태 코드, target path, 헤더 정보, 바디 정보 등이 포함.
- 요청 메시지, 응답 메시지의 모양이 다름.
- HTTP/1.1 메시지는 사람이 읽을 수 있음.
  - HTTP/2는 못 읽음.

## HTTP Headers

서버-클라이언트 간 통신 시 필요한 정보를 담는다.

- 콘텐츠 관련 정보, 인증 관련 정보, 쿠키 정보, 캐시 정보 등

클라이언트 요청 시, 서버 응답 시 모두 헤더에 정보를 담을 수 있다.

## HTTP Status

HTTP 요청 시, 클라이언트는 요청에 대한 상태 정보를 얻는다.

200, 400, 500 등 숫자 코드와 OK, NOT FOUND 등의 텍스트로 이루어진다.
