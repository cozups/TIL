# HTML

## 태그 구성요소

`<열린태그 속성 = "속성값"> 컨텐츠 </닫힌태그>`

## HTML 문서의 기본 구조

- `<!DOCTYPE html>`
  - HTML5라는 신조어로 문서를 선언하는 태그
- `<html> ... </html>`
  - html 문서의 시작과 끝
- `<head> ... </head>`
  - 웹 사이트의 간단한 요약정보를 담는 영역
  - 웹 사이트에 **노출되지 않는** 정보
- `<body> ... </body>`
  - 웹 사이트에서 눈에 보이는 정보를 담는 영역
- `<meta charset="UTF-8">`
  - 모든 문자를 웹 브라우저에서 **깨짐 없이** 표시하겠다는 의미
- `<title> ... </title>`
  - 웹 사이트 탭에 나타나는 제목을 적는 태그

## HTML 기본 태그

### \<a> 태그

`<a href = "https://www.naver.com" target = "_blank"> 네이버 </a>`

- 글자나 이미지 클릭 시, **다른 사이트로 이동**시키는 태그
- `href`: 연결할 페이지의 주소 지정
- `target`: 어떤 방식으로 페이지 이동할지?
  - `_blank`: 새 탭을 켜서 이동
  - `_self`: 현재 탭에서 이동(default)

### \<img> 태그

`<img src="logo.png" alt="회사로고"`

- 정보성을 갖고 있는 이미지 삽입
- `src`: 이미지 파일 경로
- `alt`: 이미지를 정상적으로 출력하지 못했을 경우 이미지를 대체하는 텍스트

### \<h> 태그

```
<h1>Hello World</h1>
<h2>Hello World</h2>
<h3>Hello World</h3>
```

- heading tag: 제목이나 부제목

### \<p> 태그

`<p>Nice to meet you</p>`

- paragraph: 본문 내용

### \<ol>, \<ul>, \<li> 태그

```
<ol>
  <li>메뉴1</li>
  <li>메뉴2</li>
  <li>메뉴3</li>
</ol>
```

- ordered list: 순서가 있는 리스트

```
<ul>
  <li>메뉴1</li>
  <li>메뉴2</li>
  <li>메뉴3</li>
</ul>
```

- unordered list: 순서가 없는 리스트

`<li> ... </li>`: 항목

## 구조를 잡을 때 사용하는 태그

### \<header>, \<nav> 태그

```
<header> <!-- 상단 영역 -->
  <nav> <!-- 메뉴 버튼 영역 -->
    <ul>
      <li>홈</li>
      <li>전체 목록</li>
    </ul>
  </nav>
</header>
```

- `<header> ... </header>`
  - 웹 사이트의 머리글
- `<nav> ... </nav>`
  - 메뉴 버튼을 담는 공간

### \<main>, \<article> 태그

```
<main role="main"> <!-- 본문 영역 -->
  <article> <!-- 정보 영역 -->
    <h#>…</#h>
    ...
  </article>
</main>
```

- `<main> ... </main>`

  - 문서의 주요 내용을 담는 태그
  - IE는 지원하지 않으므로 `role="main"` 속성 필수

- `<article> ... </article>`
  - 문서의 주요 이미지나 텍스트 등의 정보를 담고 구역을 설정하는 태그
  - `<h#>` 태그 필수

### \<footer> 태그

```
<footer> <!-- 하단 영역 -->
  <div> <!-- 엘리스 정보 -->
    <p>주소: 대전광역시 유성구 문지로 193 KAIST</p>
    <p>이메일: contact@elice.io</p>
  </div>
  <div> <!-- 전자상거래소비자보호법 필수 정보 -->
    <p>사업자등록번호: 000-00-00000 | 대표: 엘토끼</p>
    <p>통신판매업신고번호: 제0000-토끼굴-0000호</p>
  </div>
</footer>
```

- `<footer> ... </footer>`
  - 가장 하단에 들어가는 정보 표기할 때 사용
- `<div> ... </div>`
  - 임의의 공간을 만들 때 사용
