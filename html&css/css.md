# CSS

## CSS 구성 요소

`선택자 { 속성 : 속성값; }`

<br>

## CSS 연동 방법 3가지

### Inline Style Sheet

`<h1 style=“color: red;”> coding 101 </h1>`

- 태그 안에 직접 스타일 적용

### Internal Style Sheet

```
<head>
  <style>
    h1 {
      color: red;
    }
  </style>
</head>
```

- `<head>` 태그 안에 `<style>` 태그를 넣어 스타일 적용

### External Style Sheet

`<link rel="stylesheet" href="index.css">`

- 외부 css 파일을 링크하여 스타일 적용
- html 코드와 css 코드가 분리되어 **가독성**이 높아지고 **유지보수**하기 좋다.

<br>

## 선택자(Selector)

`type`, `class`, `id`

### Type selector

```
h1 {
  color: red;
}
```

### Class selector

```
.coding {
  color: red;
}
```

### ID selector

```
#coding {
  color: red;
}
```

<br>

### 우선순위(Cascading)

1. 순서

- **나중에** 쓰인 것일수록 우선순위가 높다.

2. 디테일

- 더 **구체적**으로 쓰인 것일수록 우선순위가 높다.

3. 선택자

- inline > id > class > type

<br>

## CSS 주요 속성 (까먹을것 같은 것만)

### font

`font-family: Arial, sans-serif`

- 앞에 쓴 것부터 우선순위
  - Arial이 없으면 → sans-serif

### background

`background-image: url('이미지경로')`

- 이미지 붙여넣을 때 url()

`background-repeat: no-repeat`

- 백그라운드 이미지 반복
  - `repeat-x`: x축 반복
  - `repeat-y`: y축 반복
  - `no-repeat`: 반복x

`background-position: left`

- 공간 안에서 이미지 좌표를 변경할 때
  - `top`, `bottom`, `center`, `left`, `right`

<br>

## 마진 병합 현상

### 형제지간 마진 병합 현상

```
<div class=“box1”>Hello World</div>
<div class=“box2”>Hello World</div>

/* style.css 문서 */
.box1 { margin-bottom: 150px; }
.box2 { bottom-top: 100px; }
```

- 마진이 겹칠 때, 더 큰 숫자로 적용한다.

### 부모 자식간의 마진 병합 현상

```
<main role=“main”>
  <article>
  </article>
</main>

/* style.css 문서 */
article {
  width: 200px;
  height: 200px;
  margin-top: 100px;
}
```

- 자식인 `<article>` 뿐만 아니라 부모인 `<main>`에도 영향을 미침

<br>

## 레이아웃에 영향을 미치는 속성

### display

```
/* style.css 문서 */
p { display: inline; }
a { display: block; }
a { display: inline-block; }
```

- block, inline 요소를 바꾸고 싶을 때 사용
- `inline-block`: block과 inline 성격 둘 다 가짐

### float

```
/* style.css 문서 */
.left { float: left; }
.right { float: right; }
```

- 요소를 왼쪽, 오른쪽으로 **정렬**할 때 사용
- 요소를 띄워 새로운 레이어 층 생성

### clear

```
/* style.css 문서 */
footer { clear: both; }
```

- float 된 요소를 찾아 제어
  - 요소가 float되면 요소가 띄워져 새로운 레이어 층(위층)을 만든다.
  - 즉, 아래 층 레이어는 비어있게 되어 뒤따라오는 요소가 float 된 요소 아래에 배치된다.
  - clear를 사용하면 float된 요소를 찾게 되고 밑에 깔려있던 레이어는 이를 인식하고 아래로 내려가게 됨.

<br>

## transform

`transform: rotate(45deg);`

- 요소를 **평면적으로** 45도 회전

`transform: scale(2, 3);`

- 숫자는 비율을 의미
  - x축 2배, y축 3배
  - 숫자 1개만 쓰면 둘 다 확대

`transform: skew(10deg, 20deg);`

- 요소를 **입체적으로** 회전
  - x축 10도, y축 20도 회전

`transform: translate(100px, 200px);`

- 요소의 좌표 변경

### prefix 접두사

```
<style>
.transition {
  -webkit-transform: translate(100px, 200px); /* 크롬, 사파리 */
  -moz-transform: translate(100px, 200px);    /* 파이어폭스 */
  -ms-transform: translate(100px, 200px);     /* 익스플로러 9.0 */
  -o-transform: translate(100px, 200px);      /* 오페라 */
}
</style>
```

<br>

## transition

`transition-property`

- transition 적용할 css 속성

`transition-duration`

- 효과가 나타나는데 걸리는 시간(몇 초동안 적용할 건지?)

`transition-timing-function`

- 효과의 속도

`transiton-delay`

- 몇 초 후에 효과를 적용하는지?

### 가상 선택자 :hover

```
<style>
  .transition: hover { width: 300px; }
</style
```

- 마우스를 올렸을 때 적용

<br>

## Animation

`animation-name`

- 애니메이션 이름

`animation-duration`
`animation-timing-function`
`animation-delay`

- transition과 비슷

`animation-iteration-count`

- 몇 번 반복?

`animation-direction`

- `alternate`: from → to → from
- `normal`: from → to
- `reverse`: to → from
