# Component

- render()를 통해 HTML 요소를 반환하는 함수
- 독립적이고, 재사용이 가능한 작은 UI 조각
- Javascript 함수와 동일한 용도로 사용

컴포넌트를 활용하면 엘리먼트를 **독립적**으로 만들어 줄 수 있다.
= 재사용성을 높일 수 있다.

## 규칙

1. 컴포넌트의 이름은 **항상 대문자**로 시작한다.
2. return() 내에 있는 것은 **태그 하나로** 묶어야 한다.

## 함수형 컴포넌트

```
const name = "cozups"
const App = () => {
  const name = '함수형 컴포넌트'
  return <div>{name}</div>
}
export default App
```

- 덜 복잡한 UI 로직
- Component 선언이 편하다.
- 클래스형보다 메모리 자원을 덜 사용한다.

## 클래스형 컴포넌트

```
import Component from 'react'
const name = "cozups"
class App extends Component {
  render() {
    const name = '클래스형 컴포넌트’
    return <div>{name}</div>
  }
}
export default App
```

- `Class` 키워드 필요
- Component를 상속 받아야 한다.
  - `import Component from 'react'`
- Render() 메소드가 반드시 필요하다.
- 함수형보다 메모리 자원을 더 사용한다.

## Component 반환

```
//App.js
import Nav from './component/nav/Nav.js'
import Posts from './component/post/Posts.js'
const App = () => {
  return `
    ${Nav()}
    <div class="container">
    ${Posts()}
    </div>
  `
}
```
