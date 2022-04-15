# DOM & Event

## 문서 객체 모델 (Document Object Model)

- 객체 지향 모델로서 구조화된 문서를 표현하는 형식

- 문서의 구조화된 표현을 제공하여 프로그래밍 언어가 **문서 구조, 스타일, 내용** 등을 변경할 수 있도록 한다.

## DOM의 종류

- Core DOM: 모든 문서 타입을 위한 DOM 모델
- HTML DOM: HTML 문서를 위한 DOM 모델
  - HTML 문서를 조작하고 접근하는 표준화된 방법
- XML DOM: 문서를 위한 DOM 모델
  - XML 문서에 접근하여 그 문서를 다루는 표준화된 방법을 정의

## Document 객체

웹 페이지를 의미

## Document 메소드

- HTML 요소의 선택
  - `document.getElementById()`
  - `document.getElementsByClassName()`
  - `document.getElementsByName()`
  - `document.querySelector()`
  - `document.querySelectorAll()`
- HTML 요소의 생성
  - `document.createElement()` 지정된 html 요소 생성
  - `document.write()`
- HTML 이벤트 핸들러 추가
  - `요소.onclick = function(){}`
- HTML 객체의 선택

## DOM의 트리구조

![dom](https://miro.medium.com/max/1088/1*NA2VKR09ECb8PEgYDteR3w.gif)

## DOM 요소의 스타일 변경

```
var selectedItem = document.getElementById("even");

selectedItem.style.color = "red"
```

## DOM 요소의 내용 변경

```
var str = document.getElementById("text");

str.innerHTML = "바꿀 내용"
```

- textContent
  - script나 style에 상관없이 노드가 가지고 있는 텍스트를 전부 가져온다.
  - 숨겨진 텍스트까지 다 가져옴
- innerText
  - 사람이 읽을 수 있는 요소만 처리 (진짜 텍스트)
  - 숨겨진 요소의 텍스트는 반환하지 않는다.
  - html 요소를 써도 텍스트 그대로 나온다.
- innerHTML
  - 요소 안의 html을 가져온다.

## Node 객체

- 노드: HTML DOM에서 정보를 저장하는 계층적 단위
- 노드 트리: 노드들의 집합. 노드들의 관계를 나타낸다.

## Node의 종류

- 문서 노드 (document node)
  - HTML 문서 전체를 나타내는 노드
- 요소 노드 (element node)
  - 모든 HTML 요소
  - 속성 노드를 가질 수 있는 유일한 노드
- 주석 노드 (comment node)
  - HTML 문서의 모든 주석
- 속성 노드 (attribute node)
  - 모든 HTML 요소의 속성
  - 요소 노드에 관한 정보를 갖는다.
  - 해당 요소의 자식 노드에는 포함되지 않는다.
- 텍스트 노드 (text node)
  - HTML 문서의 모든 텍스트

## Node의 값

`nodeName` 이름
`nodeValue` 값
`nodeType` 타입

## 이벤트 (Event)

웹 브라우저가 알려주는 HTML 요소에 대한 사건의 발생
자바스크립트는 이에 반응하여 특정 동작을 수행할 수 있다.

## 이벤트 타입

발생한 이벤트의 종류

- 폼, 키보드, 마우스, HTML DOM, Window 객체 등

## 이벤트 핸들러

이벤트가 발생했을 때 그 처리를 담당하는 함수

---

`e.preventDefault()` 특정 기능 정지 메소드
`xxx.getAttribute()` 속성 값 갖고오기

```
window.scrollTo({
  'behavior': 'smooth', //  부드럽게 이동
  'top': xxx.offsetTop  // 특정 영역의 위에서의 좌표값
});
```

특정 지점으로 스크롤링

```
setInterval(function() {
  ...
}, 3000);
```

3초 간격으로 반복 실행 (ms단위)

```
xxx.animate({
  marginLeft: ["0px", "1024px"]
}, {
  duration: 500,
  easing: "ease",
  iterations: 1,
  fill: "both"
});
```

`fill`: 애니메이션이 끝난 후의 설정

- none: 상태 설정 x
- forwards: 애니메이션이 키프레임의 100%에 도달했을 때 마지막 키프레임 유지
- backwards: 끝난 후 시작점으로 돌아옴
- both: 앞 뒤 결과를 조합하여 설정 (forwards와 backwards를 둘다)
- inherit: 애니메이션의 상태를 상속받음
  ![fill](https://t1.daumcdn.net/thumb/R1280x0.fgif/?fname=http://t1.daumcdn.net/brunch/service/user/L61/image/0Q7zk8HAG6G9jSVnvyVXugv3mi8.gif)
  [fill에 관련된 유튜브](https://www.youtube.com/watch?v=irJXZnA3g5U)

`xxx.classList.add(클래스명)` 클래스 추가
`xxx.classList.remove(클래스명)` 클래스 제거

```
nodeList.forEach(function(item) {
  console.log(item)
})
```

노드 리스트의 각 노드가 item으로 들어가서 함수를 실행

`xxx.previousElementSibling`
`xxx.nextElementSibling`
`xxx.parentElement`
`xxx.firstElementChild`
`xxx.lastElementChild`

### firstChild vs firstElementChild

`firstChild`

- element node, a text node or a comment node 반환

`firstElementChild`

- element node (ignores text and comment nodes)

다른 것들도 마찬가지겠다.
