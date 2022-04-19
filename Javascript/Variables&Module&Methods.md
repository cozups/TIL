# Variables

| Name  | Scope           | 재정의 | 재선언 |
| ----- | --------------- | ------ | ------ |
| var   | function scoped | 가능   | 가능   |
| let   | block scoped    | 가능   | 불가능 |
| const | block scoped    | 불가능 | 불가능 |

<br>
# Module

## export

변수나 함수, 클래스를 선언할 때 앞에 `export`를 붙이면 내보내기가 가능하다.

```
export let name = ['Kim', 'Mark', 'Jack'];

export const CAPITAL_CITY = 'Seoul';

export class Person {
  constructor(name) {
    this.name = name;
  }
}

export function Person(name) [
  console.log(name);
]
```

<br>
앞에 붙이지 않고 떨어져서 `export` 할 수 있다.

```
function hello(user) {
  alert(`Hello, ${user}!`);
}

function bye(user) {
  alert(`Bye, ${user}!`);
}

export {hello, bye};
```

## export 'as'

as를 통해 별명으로 바꿀 수 있다.

```
export {hello as hi, bye as ByeBye};
```

## import

`export`한 것들을 불러올 때 `import`를 사용한다.

```
import {hello, bye} from './say.js';

hello('Kim'); // Hello, Kim!
bye('Mark');  // Bye, Mark!
```

가져올 것이 많을 땐

```
import * as say from './say.js'

say.hello('Kim');
say.bye('Mark');
```

## import 'as'

`import`도 as를 통해 별명을 만들 수 있다.

```
import {hello as hi, bye as ByeBye} from './say.js';

hi('Kim');  // Hello, Kim!
ByeBye('Mark'); // Bye, Mark!
```

## export default

모듈은 크게 두 가지로 나뉜다.

- 여러 개의 함수가 있는 라이브러리 형태 모듈
- 개체 하나만 선언되어 있는 모듈

`export default`를 사용하면 '해당 모듈엔 개체가 하나만 있다'는 사실을 나타낼 수 있다.

```
export default function Person(name) {
 console.log(name);
}

// or

function Person(name) {
	console.log(name);
}

export default User;
```

파일 하나엔 대개 `export default`가 하나만 있다.
`default`를 붙인 모듈은 중괄호 `{}`없이 모듈을 가져올 수 있다.

**중괄호를 달면 오류가 난다.**
<br>

# Template Literal

백틱(\`) 안에 표현식을 `${...}` 형태로 감싸는 것

```
function sum(a, b) {
  return a + b;
}

alert(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.
```

<br>
# Arrow Function

```
let func = function(arg1, arg2, ...argN) {
  return expression;
};
```

위 형태의 함수를 아래와 같이 표현할 수 있다.

```
let func = (arg1, arg2, ...argN) => expression;
```

<br>
# class

```
class Person {
	constructor (name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
}
let cozups = new Person();
console.log(cozups);
```

<br>
# forEach
주어진 `callback`을 배열의 각 요소에 대해 한 번씩 실행한다.

```
let names = ["Miso", "Mark", "Jack"];

names.forEach((e) => console.log(e))
```

<br>
# map()
배열 내 각각의 모든 요소들에 대하여 주어진 함수를 호출한 결과를 모아 배열로 반환한다.

```
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
```

<br>
# reduce()

`initial value`가 주어진 경우, `initial value`에 '각 요소에 대한 `callback` 함수 결과값'이 누적된다.

`initial value`가 없는 경우, 첫번째 값을 기준으로 값이 누적된다.

```
const arr = [1, 2, 3, 4, 5];
const result = arr.reduce((acc, cur) => { return acc += cur; });
console.log(result);  // 1 + 2 + 3 + 4 + 5 = 15
```
