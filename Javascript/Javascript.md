[1. 변수](#변수)  
[2. 연산자](#연산자)  
[3. 객체](#객체)  
[4. 내장 객체](#내장-객체)  
[5. 브라우저 객체 모델](#브라우저-객체-모델)  
[6. 함수](#함수)

# 자바스크립트

## 변수

- String
- Number
- Boolean
  - 0, null, undefined, 빈 문자 제외하고 true 반환
- Null & undefined
  - undefined: 변수에 값이 저장되기 전 기본값
  - null: 변수에 저장된 값이 null

### 변수 선언

`var name;`  
`var name = value;`

- 변수 이름: 한글 사용 x, 일부 특수문자(\_, $)
- 의미에 맞게 짓는 것이 좋다.
- camelCase 사용

## 연산자

### 산술 연산자

- +, -, \*, /, %

### 문자 결합 연산자

- 문자형 데이터 + 문자형 데이터 = 문자형 데이터
- 문자형 데이터 + 숫자형 데이터 = 문자형 데이터

### 대입 연산자

- =
- +=, -=, \*=, /=, %=

### 증감 연산자

- ++, --

### 비교 연산자

- \>, <, >=, <=, ==, !==
- ===, !==
  - ===: 값과 자료형도 같음
  - !==: 값 또는 자료형이 같지 않음

### 논리 연산자

- ||, &&, !

### 삼항 조건 연산자

`조건식 ? 코드1 : 코드2;`

- true면 코드1 실행, false면 코드2 실행

## 제어문

### if

```
if(condition 1) {

}
else if (condition 2) {

}
else {

}
```

### switch

```
var ch = value;
switch(ch) {
    case c1:
        break;
    case c2:
        break;
    .
    .
    .
    default:
        break;
}
```

### while

```
while (condition) {
    코드;
    증감식;
}
```

### do while

```
do {
    코드;
    증감식;
} while(condition)
```

### for

```
for(초기값; 조건식; 증감식){
    코드;
}
```

## 객체

`object.method();`  
`object.property;` or `object.property = value;`

### 객체의 종류

- **내장 객체**
  - 자바스크립트 엔진에 내장
  - String, Date, Array, Math ...
- **브라우저 객체 모델 (BOM, Browser Object Model)**
  - 브라우저에 계층 구조로 내장되어 있는 객체
  - window, screen, location, history, navigator ...
  - 브라우저(window)는 document, location 객체의 상위 객체
- **문서 객체 모델 (DOM, Document Object Model)**
  - html 문서 구조
  - \<html> 다음 \<head>\<body> ...
  - html의 모든 요소들을 문서 객체로 선택하여 자유롭게 속성을 바꾸거나 스타일을 적용할 수 있다.
  - IE8 이하 버전에서는 호환성이 떨어짐
    - 이를 극복하기 위해 제이쿼리 문서 객체 모델을 많이 사용함.

## 내장 객체

### 내장 객체 생성하기

`참조변수(인스턴스 이름) = new 생성 함수()`

```
<script>
      var tv = new Object();
      tv.color = "white";
      tv.price = 300000;
      tv.info = function () {
        document.write("tv 색상: " + this.color, "<br/>");
        document.write("tv 가격: " + this.price, "<br/>");
      };

      var car = {
        color: "black",
        price: 5000000,
        info: function () {
          document.write("car 색상: " + this.color, "<br/>");
          document.write("car 가격: " + this.price, "<br/>");
        },
      };

      document.write("<h1>tv 객체 메소드 호출</h1>");
      tv.info();
      document.write("<h1>car 객체 메소드 호출</h1>");
      car.info();
</script>
```

### 날짜 정보 객체

`참조변수 = new Date();`  
`참조변수 = new Date("연/월/일")` or `참조변수 = new Date(연, 월-1, 일);`

```
<script>
      var today = new Date();
      var nowMonth = today.getMonth(); // 월-1 반환
      nowDate = today.getDate();
      nowDay = today.getDay(); // 1~6: 월~토

      document.write("<h1>오늘 날짜 정보</h1>");
      document.write("현재 월: " + nowMonth, "<br/>");
      document.write("현재 일: " + nowDate, "<br/>");
      document.write("현재 요일: " + nowDay, "<br/>");

      var worldCup = new Date(2002, 4, 31);
      var theMonth = worldCup.getMonth();
      theDate = worldCup.getDate();
      theDay = worldCup.getDay();

      document.write("<h1>월드컵 날짜 정보</h1>");
      document.write("2002월드컵 월: " + theMonth, "<br/>");
      document.write("2002월드컵 일: " + theDate, "<br/>");
      document.write("2002월드컵 요일: " + theDay, "<br/>");
</script>
```

```
<script>
      var today = new Date();
      var nowYear = today.getFullYear();

      var theDate = new Date(nowYear, 11, 31);
      var diffDate = theDate.getTime() - today.getTime();
      // getTime - 1970/1/1 부터 지난 시간을 밀리초로 표기

      var result = Math.ceil(diffDate / (60 * 1000 * 60 * 24));
      document.write("연말 D-Day: " + result + " 일 남았습니다.");
</script>
```

### 배열 객체

```
var d = new Array();
d[0] = val1;
d[1] = val2;
d[2] = val3;
```

```
var d = new Array(val1, val2, val3);
```

```
var d = [val1, val2, val3];
```

- 배열 객체 메소드 사용하기

```
<script>
      var arr_1 = ["사당", "교대", "방배", "강남"];
      var arr_2 = ["신사", "압구정", "옥수"];

      var result = arr_1.join("-");
      console.log(result);

      result = arr_1.concat(arr_2);
      console.log(result);

      result = arr_1.slice(1, 3);
      console.log(result);

      arr_1.sort();
      console.log(arr_1);

      arr_2.reverse();
      console.log(arr_2);

      var greenArr = ["교대", "방배", "강남"];
      var yellowArr = ["미금", "정자", "수서"];

      greenArr.splice(2, 1, "서초", "역삼");
      console.log(greenArr);

      var data1 = yellowArr.pop();
      var data2 = yellowArr.shift();

      yellowArr.push(data2);
      console.log(yellowArr);

      yellowArr.unshift(data1);
      console.log(yellowArr);
</script>
```

### 문자열 객체

`var 참조변수 = new String(문자형 데이터);`  
`var 참조변수 = 문자형 데이터;`

## 브라우저 객체 모델

- 브라우저에 내장된 객체
- **BOM**, Browser Object Model
- 계층적 구조

![BOM](https://t1.daumcdn.net/cfile/tistory/9910D1425B2A39D122)

### window 객체

1. open()  
   `open("URL", "새 창 이름", "새 창 옵션");`  
   `window.open("https://www.naver.com", "naver", "width=350, height=400, left=50, top=10, scrollbars=no");`

- width: 창의 너비
- height: 창의 높이
- left: 수평 위치, x축 위치
- top: 수직 위치, y축 위치
- scrollbars: 스크롤바 숨김/노출
- location: url 주소 입력 영역 숨김/노출
- status: 상태 표시줄 영역 숨김/노출
- toolbars: 도구 상자 영역 숨김/노출

2. alert()  
   `alert("경고 메시지");`

3. prompt()  
   `prompt("질의 내용", "기본 답변");`

4. confirm()

- 확인/취소 창
  `confirm("질의내용(삭제 하시겠습니까?)");`

5. 일정한 시간 간격으로 코드 실행

- setInterval()
  - 일정 시간 간격으로 코드 반복 실행
  - 시간 간격은 1/1000(ms) 단위 → 1000이 1초
  ```
  var intv = setInterval(function(){code}, 3000);
  var intv = setInterval("code", 3000);
  ```
- clearInterval()

  - setInterval() 취소  
    `clearInterval(intv);`

- setTimeout()
  - 일정 시간이 지나면 코드를 실행하고 종료
  ```
  var tim = setTimeout(function(){code}, 5000);
  var tim = setTimeout("code", 5000);
  ```
- clearTimeout()
  - setTimeout() 메소드 제거
    `clearTimeout(tim);`

### screen 객체

- screen.width
  - 화면의 너비
- screen.height
  - 화면의 높이
- screen.availWidth
  - 작업 표시줄을 제외한 화면의 너비
- screen.availHeight
  - 작업 표시줄을 제외한 화면의 높이
- screen.colorDepth
  - 사용자 모니터가 표현 가능한 컬러 bit

### location 객체

- 현재 url에 대한 정보와 새로고침 메소드 제공

- location.href
  - 주소 영역의 참조 주소 설정 및 url 반환
- location.hash
  - url의 해시값(#에 표시된 값) 반환
- location.hostname
  - url의 호스트 이름 설정 및 반환
- location.host
  - url의 호스트 이름과 포트 번호 반환
- location.protocol
  - url의 프로토콜 반환
- location.search
  - url의 쿼리(요청값) 반환
- location.reload()
  - 새로 고침

### history 객체

- 사용자가 방문한 사이트의 기록을 남기고 이전 방문 사이트와 다음 방문 사이트로 돌아갈 수 있는 속성과 메소드 제공
- history.back()
  - 이전 방문 사이트로
- history.forward()
  - 다음 방문 사이트로
- history.go(이동숫자)
  - 음수: 이전 방문 사이트 숫자 만큼 이동
  - 양수: 다음 방문 사이트 숫자 만큼 이동
- history.length
  - 방문 기록에 저장된 목록 개수 반환

### navigator 객체

- 현재 방문자가 사용하는 브라우저 정보, 운영체제 정보를 제공하는 객체

## 함수

```
function() {
  // code
}

var func = function() {
  // code;
}
```

- hoisting 지원

### 매개변수 없이 함수에 전달된 값 받기

```
function sum(){
  var result = arguments[0] + arguments[1] + arguments[2];

  document.write(result);
}

sum(10, 20, 30);
```

- arguments를 사용하면 된다.

### 즉시 실행 함수

```
<script>
  var num = 100;
  function menu(){
    num += 100;
    alert(num);
  }
  menu();

  function menu(){
    alert(num);
  }
</script>
```

- 위 코드 실행 시, 200이 아닌 100이 출력된다.
- 같은 이름의 함수 사용 시, 충돌이 생길 수 있다. 특히 대형 프로젝트에서.

```
<script>
  (function() {
    var num = 100;  // 지역 변수
    function menu() { // 지역 함수
      num += 100;
      alert(num);
    }
    menu();
  })();

  (function() {
    var num = 100;
    function menu(){
      alert(num);
    }
  })();
</script>
```

- 위 처럼 변수를 지역 변수로, 함수를 지역 함수로 바꾸어 충돌을 피할 수 있다.

```
(() => {
  /* */
})()
```

- 이렇게도 표현할 수 있다.

### 객체 생성자 함수

```
function checkWeight(name, height, weight) {
        this.userName = name;
        this.userHeight = height;
        this.userWeight = weight;
        this.minWeight;
        this.maxWeight;

        this.getInfo = function () {
          var str = "";
          str += "이름: " + this.userName + ", ";
          str += "키: " + this.userHeight + ", ";
          str += "몸무게: " + this.userWeight + "<br/>";
          return str;
        };

        this.getResult = function () {
          this.minWeight = (this.userHeight - 100) * 0.9 - 5;
          this.maxWeight = (this.userHeight - 100) * 0.9 + 5;

          if (
            this.userWeight >= this.minWeight &&
            this.userWeight <= this.maxWeight
          ) {
            return "정상 몸무게 입니다.";
          } else if (this.userWeight < this.minWeight) {
            return "정상 몸무게보다 미달입니다.";
          } else {
            return "정상 몸무게보다 초과입니다.";
          }
        };
}
```

### 메모리 절약을 위한 프로토타입 사용

- 프로토타입을 사용하지 않으면, 객체가 생성될 때마다 함수가 등록되어 메모리 공간 차지
- 프로토타입을 사용하면 메모리 낭비를 줄일 수 있다.
- 프로토타입 = 원형 → 자바스크립트에서 '객체 생성자 함수'

```
function checkWeight(name, height, weight) {
        this.userName = name;
        this.userHeight = height;
        this.userWeight = weight;
        this.minWeight;
        this.maxWeight;
}

      checkWeight.prototype.getInfo = function () {
        var str = "";
        str += "이름: " + this.userName + ", ";
        str += "키: " + this.userHeight + ", ";
        str += "몸무게: " + this.userWeight + "<br/>";
        return str;
};

      checkWeight.prototype.getResult = function () {
        this.minWeight = (this.userHeight - 100) * 0.9 - 5;
        this.maxWeight = (this.userHeight - 100) * 0.9 + 5;

        if (
          this.userWeight >= this.minWeight &&
          this.userWeight <= this.maxWeight
        ) {
          return "정상 몸무게 입니다.";
        } else if (this.userWeight < this.minWeight) {
          return "정상 몸무게보다 미달입니다.";
        } else {
          return "정상 몸무게보다 초과입니다.";
        }
};
```
