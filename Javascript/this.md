# this

자바스크립트의 this와 자바에서의 this는 다르다.

Java에서의 this는 인스턴스 자신(self)을 가리키는 참조변수이다.

그러나, 자바스크립트의 경우 Java와 같이 this에 바인딩되는 객체는 한가지가 아니라 해당 함수 호출 방식에 따라 this에 바인딩되는 객체가 달라진다.

## 함수 호출 방식과 바인딩

자바스크립트의 경우 **함수 호출 방식(어떻게 호출되었는지)** 에 따라 `this`에 바인딩할 객체가 동적으로 결정된다.

```
var foo = function () {
  console.dir(this);
};

// 1. 함수 호출
foo(); // window
// window.foo();

// 2. 메소드 호출
var obj = { foo: foo };
obj.foo(); // obj

// 3. 생성자 함수 호출
var instance = new foo(); // instance

// 4. apply/call/bind 호출
var bar = { name: 'bar' };
foo.call(bar);   // bar
foo.apply(bar);  // bar
foo.bind(bar)(); // bar
```

### 1. 함수 호출

기본적으로 `this`는 전역 객체에 바인딩 된다.

- 전역 객체
  - browser-side: `window`
  - server-side: `global`

1. 전역 함수는 물론이고 내부 함수도 `this`는 전역 객체에 바인딩 된다.

```
function foo() {
  console.log("foo's this: ",  this);  // window
  function bar() {
    console.log("bar's this: ", this); // window
  }
  bar();
}
foo();
```

2. 메소드의 내부 함수일 경우에도 `this`는 전역 객체에 바인딩 된다.

```
var value = 1;

var obj = {
  value: 100,
  foo: function() {
    console.log("foo's this: ",  this);  // obj
    console.log("foo's this.value: ",  this.value); // 100
    function bar() {
      console.log("bar's this: ",  this); // window
      console.log("bar's this.value: ", this.value); // 1
    }
    bar();
  }
};

obj.foo();
```

3. callback 함수인 경우에도 `this`는 전역 객체에 바인딩 된다.

```
var value = 1;

var obj = {
  value: 100,
  foo: function() {
    setTimeout(function() {
      console.log("callback's this: ",  this);  // window
      console.log("callback's this.value: ",  this.value); // 1
    }, 100);
  }
};

obj.foo();
```

내부 함수의 `this`가 전역 객체 참조를 회피하는 방법은 아래와 같다.

```
var value = 1;

var obj = {
  value: 100,
  foo: function() {
    var that = this;  // Workaround : this === obj

    console.log("foo's this: ",  this);  // obj
    console.log("foo's this.value: ",  this.value); // 100
    function bar() {
      console.log("bar's this: ",  this); // window
      console.log("bar's this.value: ", this.value); // 1

      console.log("bar's that: ",  that); // obj
      console.log("bar's that.value: ", that.value); // 100
    }
    bar();
  }
};

obj.foo();
```

`that`변수에 this를 저장하여 `obj`를 가리킬 수 있도록 함.

### 2. 메소드 호출

메소드 내부의 `this`는 해당 메소드를 소유한 객체에 바인딩 된다.

```
var obj1 = {
  name: 'Lee',
  sayName: function() {
    console.log(this.name);
  }
}

var obj2 = {
  name: 'Kim'
}

obj2.sayName = obj1.sayName;

obj1.sayName();
obj2.sayName();
```

![method](https://poiemaweb.com/img/Method_Invocation_Pattern.png)

프로토타입 객체도 메소드를 가질 수 있으며 일반 메소드 방식과 마찬가지로 해당 메소드를 호출한 객체에 바인딩 된다.

### 3. 생성자 함수 호출

기존 함수에 `new` 연산자를 붙여 호출하면 그 함수는 생성자 함수로 동작한다.

생성자 함수명은 첫 문자를 대문자로 기술하여 혼란을 방지한다.

```
// 생성자 함수
function Person(name) {
  this.name = name;
}

var me = new Person('Lee');
console.log(me); // Person&nbsp;{name: "Lee"}

// new 연산자와 함께 생성자 함수를 호출하지 않으면 생성자 함수로 동작하지 않는다.
var you = Person('Kim');
console.log(you); // undefined
```

<h4> 생성자 함수 동작 방식 </h4>

- 생성자 함수 코드가 실행되기 전 빈 객체가 생성
- `this`가 빈 객체를 가리킴
- `this`를 사용하여 동적으로 프로퍼티나 메소드 생성
- 반환문이 있는 경우, `this`에 바인딩 된 새로 생성한 객체가 반환됨.
- `this`가 아닌 다른 객체를 명시적으로 반환하는 경우, `this`가 아닌 해당 객체가 반환됨.

<h4>객체 리터럴 방식과 생성자 함수 방식의 차이</h4>

```
// 객체 리터럴 방식
var foo = {
  name: 'foo',
  gender: 'male'
}

console.dir(foo);

// 생성자 함수 방식
function Person(name, gender) {
  this.name = name;
  this.gender = gender;
}

var me  = new Person('Lee', 'male');
console.dir(me);

var you = new Person('Kim', 'female');
console.dir(you);
```

- 객체 리터럴 방식: 생성된 객체의 프로토타입 객체 `Object.prototype`
- 생성자 함수 방식: 생성된 객체의 프로토타입 객체 `Person.prototype`

<h4>생성자 함수에 new를 붙이지 않고 호출할 경우</h4>

- 일반 함수 호출: `this` → 전역 객체 바인딩
- `new`로 생성자 함수 호출: `this` → 생성한 빈 객체 바인딩

```
function Person(name) {
  // new없이 호출하는 경우, 전역객체에 name 프로퍼티를 추가
  this.name = name;
};

// 일반 함수로서 호출되었기 때문에 객체를 암묵적으로 생성하여 반환하지 않는다.
// 일반 함수의 this는 전역객체를 가리킨다.
var me = Person('Lee');

console.log(me); // undefined
console.log(window.name); // Lee
```

생성자 함수를 `new`없이 호출한 경우, `Person` 내부의 `this`는 전역 객체를 가리킴 → `window`에 바인딩

`this`도 반환하지 않으므로 `undefined`

### 4. apply / call / bind

`this`를 명시적으로 바인딩하는 방법

<h4>1. apply</h4>

```
func.apply(thisArg, [argsArray])

// thisArg: 함수 내부의 this에 바인딩할 객체
// argsArray: 함수에 전달할 argument의 배열
```

`apply()` 메소드를 호출하는 주체는 함수

```
var Person = function (name) {
  this.name = name;
};

var foo = {};

// apply 메소드는 생성자함수 Person을 호출한다. 이때 this에 객체 foo를 바인딩한다.
Person.apply(foo, ['name']);

console.log(foo); // { name: 'name' }
```

`Person`의 `this`는 `foo`로 바인딩

`foo` 객체에는 `name` 프로퍼티가 없으므로 동적 추가되고 값 할당

<h4>2. call</h4>

```
Person.apply(foo, [1, 2, 3]);

Person.call(foo, 1, 2, 3);
```

`call()` 메소드의 경우, `apply()`와 기능은 같지만 `apply()`의 두번째 인자에서 배열 형태로 넘긴 것을 각각 하나의 인자로 넘긴다.

```
function Person(name) {
  this.name = name;
}

Person.prototype.doSomething = function (callback) {
  if (typeof callback == 'function') {
    // --------- 1
    callback.call(this);
  }
};

function foo() {
  console.log(this.name); // --------- 2
}

var p = new Person('Lee');
p.doSomething(foo);  // 'Lee'
```

1의 시점에서 this는 Person 객체이다. 그러나 2의 시점에서 this는 전역 객체 window를 가리킨다.

콜백함수를 호출하는 외부 함수 내부의 this와 콜백함수 내부의 this가 상이하기 때문에 문맥상 문제가 발생한다.

따라서 콜백함수 내부의 this를 콜백함수를 호출하는 함수 내부의 this와 일치시켜 주어야 한다.

<h4>3. bind</h4>

```
function Person(name) {
  this.name = name;
}

Person.prototype.doSomething = function (callback) {
  if (typeof callback == 'function') {
    // callback.call(this);
    // this가 바인딩된 새로운 함수를 호출
    callback.bind(this)();
  }
};

function foo() {
  console.log('#', this.name);
}

var p = new Person('Lee');
p.doSomething(foo);  // 'Lee'
```

`Function.prototype.bind`는 `Function.prototype.apply`, `Function.prototype.call` 메소드와 같이 함수를 실행하지 않기 때문에 명시적으로 함수를 호출할 필요가 있다.
