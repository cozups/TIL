# IndexedDB

자바스크립트 기반의 객체 지향 데이터베이스

- 브라우저의 객체 저장 가능
- 자바스크립트 객체, 파일, blobs 등을 저장
  - blob (Binary Large Object): 데이터베이스 관리 시스템의 하나의 엔티티로서 저장되는 이진 데이터의 모임. 일반적으로 그림, 오디오, 또는 기타 멀티미디어 오브젝트
- transaction 지원
  - transaction: 데이터베이스의 상태를 변화시키기 해서 수행하는 작업의 단위
    - SELECT, INSERT, DELETE, UPDATE를 이용하여 데이터베이스 접근

IndexedDB를 사용하려면 데이터베이스 스키마를 지정하고, 데이터베이스와 통신을 연 후에, 일련의 트랜잭션을 통해 데이터를 가져오거나 업데이트해야 한다.

## 클라이언트 측 브라우저에 저장하기 위한 API

1. 쿠키 (Cookies)

   문서 내부에 간단한 문자열 데이터를 저장

<br>

2. 로컬 저장소 (Local Storage)

   사용자가 직접 지우기전까지는 데이터가 영구적으로 보존된다.

   Local Storage는 5mb로 제한되어 있다. (일부 브라우저는 늘릴 수 있음)

<br>

3. 세션 저장소 (Session Storage)

   탭을 닫거나 브라우저를 종료하면 데이터가 모두 사라진다.

   용량 제한이 없다.

<br>

4. IndexedDB

   Key를 이용해 Index되는 구조화된 데이터를 쉽게 저장

   IndexedDB의 데이터는 인덱스 키를 사용해 저장하고 회수할 수 있음.

   localStorage에 비해 훨씬 많은 데이터 저장 가능

   Index를 지원하기 때문에 **많은 양의 구조화된 데이터**를 다룰 때 적합하다

로컬 스토리지와 세션 스토리지는 웹 스토리지이다.

## IndexedDB 장단점

### 장점

- 더 복잡하고 구조적인 데이터를 브라우저에서 다룰 수 있다.
- 더 많은 양의 데이터를 저장할 수 있다.
- 상호작용 시 더 많은 제어를 할 수 있다.
- 여러 개의 데이터베이스, 각 DB 내부에 여러 개의 테이블을 가질 수 있다.

### 단점

- 웹 저장소 API보다 사용법이 복잡하다.

## IndexedDB 작업 순서

**1. 데이터베이스 열기**

- `let request = indexedDB.open(name, version);`

  - name: 데이터베이스 이름
  - version은 보통 1
  - 데이터베이스 수정 시 version 수정해야 함

- DB가 존재하지 않는 경우

  - `request.onupgradeneeded` 실행

- DB가 존재하는 경우
  - input version > 현재 DB 버전
    - `request.onupgradeneeded` 실행
  - input version = 현재 DB 버전
    - `request.onSuccess` 실행
  - input version < 현재 DB 버전
    - `request.onerror` 실행

```
let onRequest = indexedDB.open( ‘myDB’, 1);

onRequest.onsuccess = () => {
console.log('Success creating or accessing db')
}
onRequest.onupgradeneeded = () => {
const database = onRequest.result
}
onRequest.onerror = () => {
console.log('Error creating or accessing db')
}
```

<br>

**2. ObjectStore 생성**

- ObjectStore: 데이터를 담는 공간이며 여러개의 Key-Value 값으로 형성
- ObjectStore의 이름은 고유해야 함.

```
database.createObjectStore(‘store name’, {keyPath: ‘id’})
```

`keyPath`: IndexedDB에서 키로 사용할 객체 프로퍼티 (eg. id)
<br>

```
database.createObjectStore(‘store name’, {autoIncrement: true})
```

`autoIncrement`: `true`인 경우 스토어에 저장되는 키는 자동으로 생성, 보통 증가하는 숫자값
<br>

```
database.createObjectStore(‘store name’, {keyPath: ‘id’,
autoIncrement: true})
```

두 가지를 합친 것.
<br>

```
let onRequest = indexedDB.open( ‘myDB’, 1);

onRequest.onupgradeneeded = () => {
  const database = onRequest.result
  const objectStore = database.createObjectStore(‘store name’,
  {keyPath: ‘id’})
}
```

object store를 생성하고 수정하는 것은 오직 IndexedDB의 버전을 업데이트 하는 과정에서 수행되어야 한다. 즉 `upgradeneeded` 이벤트 핸들러 내에서 생성과 수정이 일어나야 한다.

<br>

**3. Transaction 시작 - 데이터 추가, 검색 작업 요청**

```
const transaction = database.transaction(“objectStore Name”,
'Transaction Mode')
```

트랜잭션은 데이터베이스 객체 단위로 작동하므로 트랜잭션을 사용할 객체 저장소를 지정해줘야 함

**Transaction Mode**

- `readonly`
  이미 존재하는 objectStore의 레코드를 읽을 때 사용.
  모드가 지정되지 않는다면 기본적으로 설정되는 모드.
- `readwrite`
  이미 존재하는 objectStore의 데이터를 읽고 다시 쓸 때 사용.
  - 객체 저장소의 레코드를 읽을 때
  - 존재하는 객체 저장소에 변경점을 기록할 때
  - 데이터베이스의 스키마나 구조를 변경할 때
- `versionchange`
  - 객체 저장소를 만들 때
  - 객체 저장소에서 인덱스를 만들거나 삭제할 때
  - 데이터베이스의 스키마나 구조를 변경할 때

<br>

**ObjectStore에 데이터 추가하기**

```
database.createObjectStore(‘todos’, {autoIncrement: true})
function addTodos() {
  const todo = {
    title: “todo1” ,
    text: “no.1 thing to do”
  }

  // todos ObjectStore에 readwrite(읽기, 쓰기) 권한으로 Transaction 시작하기
  const transaction = database.transaction(“todos”, readwrite')

  // objectStore()함수로 todos 테이블 선택
  const todos = transaction.objectStore(“todos”)

  // 원하는 객체 (todo)를 테이블에 추가
  todos.add(todo)
}
```

```
// Add User Data
dbPromise.then(function(db) {
  const transaction = db.transaction(‘users’,
  'readwrite')
  const store = transaction.objectStore(‘users’,{keyPath: ‘id’})
  store.add( { id: 3, name: ‘Frank’ , age: 23} )
  return transaction.complete
}
```

`objectStore.add()` 사용

**사용자 데이터 읽기**

```
// Get Data
dbPromise.then(function(db) {
  const transaction = db.transaction([‘users’], 'readwrite')
  const store = transaction.objectStore(‘users’)
  return store.get(‘Frank’) //{ id: 3, name: ‘Frank’ , age: 23}
```

```
// Get all the Data
return store.getAll()
// { id: 1, name: “Pete”, age: 35 }, {id: 2, name: “Mark”, age: 23 }, { id: 3, name: “Frank”, age: 23}
```

`objectStore.get()`과 `objectStore.getAll()` 사용

**사용자 데이터 수정**

```
// Update User Data
dbPromise.then(function(db) {
  const transaction = db.transaction([‘users’], 'readwrite')
  const store = transaction.objectStore(‘users’)
  return store.put(‘Frank’)
}
```

`objectStore.put()` 사용

**사용자 데이터 삭제**

```
// Delete Data
dbPromise.then(function(db) {
  const transaction = db.transaction([‘users’], 'readwrite')
  const store = transaction.objectStore(‘users’)
  store.delete(‘Frank’)
  return transaction.complete;
}
```

`objectStore.delete()` 사용

**4. index마다 DOM 이벤트 수신해서 작업**

**5. 결과 수행**
