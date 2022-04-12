# CSS

## CSS 구성 요소

`선택자 { 속성 : 속성값; }`

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

### 우선순위(Cascading)

1. 순서

- **나중에** 쓰인 것일수록 우선순위가 높다.

2. 디테일

- 더 **구체적**으로 쓰인 것일수록 우선순위가 높다.

3. 선택자

- inline > id > class > type

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
