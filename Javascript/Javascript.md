[1. 변수](#변수)  
[2. 연산자](#연산자)  
[3. 객체](#객체)

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
