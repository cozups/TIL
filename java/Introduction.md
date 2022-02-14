[1. Java](#Java)  
[2. JVM](#자바-가상-머신-jvmjava-virtual-machine)  
[3. "Hello, World!" 프로그램](#hello-world-프로그램)  
[4. 일반 자료형](#일반-자료형)  
[5. 변수](#변수)  
[6. 연산자](#연산자)  
[7. 문자열](#문자열)  
[8. 입출력](#입출력)  
[9. 흐름 제어문(if, for, while ...)](#흐름-제어문)
[10. 배열](#배열)

# Java

자바(Java)는 처음부터 객체 지향 언어로 개발된 프로그래밍 언어

자바 가상 머신(JVM)을 통해 어떤 운영체제에서도 같은 형태로 실행될 수 있다.

<br>

## Java의 특징

- 운영체제와 독립적으로 실행할 수 있다.

- C++과 마찬가지로 OOP이지만 더 클린한 문법을 가지고 있다.

- 연산자 오버로딩 대신 제네릭을 도입하여 코드의 가독성을 높였다.

- Garbage collector가 사용하지 않은 메모리 공간에 대하여 알아서 관리하므로 개발자가 일일이 체크할 필요가 없다.

- 네트워크 프로그래밍과 멀티스레드 프로그래밍에 대한 라이브러리를 지원한다.

- 자바를 실행하기 위해 JVM을 거쳐야 하므로 C/C++에 비해 속도가 느릴 수 있다.

<br>

# 자바 가상 머신: JVM(Java Virtual Machine)

OS와 Java application 사이에 존재하는 소프트웨어 레이어

자바 바이트 코드를 실행하기 위한 환경을 제공한다.

![JVM](https://user-images.githubusercontent.com/58796245/153809979-5edaa864-c87f-40c5-ad29-4f8f7e39d954.png)

## Java Compiler

자바 컴파일러는 자바 소스 코드를 JVM이 이해할 수 있는 자바 바이트 코드로 변환한다.

<br>

## Java byte code

JVM이 이해할 수 있는 언어로, 코드의 명령어 크기가 1바이트이기 때문에 바이트 코드로 불린다.

확장자는 .class이며 JVM이 있으면 어떤 운영체제에서도 실행할 수 있다.

<br>

## JVM의 구성

1. Java Interpreter
   - 자바 바이트 코드를 읽고 해석

2. Class Loader
   - 동적으로 클래스를 로딩
   - 자바는 동적으로 클래스를 읽어 온다.

3. Just-In-Time Compiler
   - 자바 바이트 코드를 런타임에 실제 기계어로 변환해주는 컴파일러

4. Garbage Collector
   - 사용하지 않는 메모리를 자동으로 회수
   - 개발자가 따로 메모리를 관리하지 않아도 된다.

<br>

# "Hello, World!" 프로그램

```
package CSE0000;

public class HelloWorld {
    
    public static void main(String[] args){
        // TO DO
        System.out.println("Hello, World!");
    }

} 
```

- class는 method를 포함하고 있을 수 있다.
  - method: 특정 작업을 수행하기 위한 명령문의 집합
  - HelloWorld 클래스의 메소드: main
- main 메소드는 프로그램의 스타팅 포인트이다.
- **static**으로 선언된 것은, 이 메소드는 인스턴스를 필요로 하지 않는다는 것이다.
  - 인스턴스: 메모리에 할당된 객체(object)
- return type이 void인 것은, 반환하는 것이 없다는 뜻이다.
- package
  - 연관성있는 여러 클래스들을 모아놓은 것
  - hierarchical
- 주석: `//` 사용

## System.out은 Standard Output을 가리킨다.

```
System.out.println("Hello, World!");
```

- System.out은 PrintStream 클래스의 인스턴스이다.

- println은 PrintStream 클래스 안에 선언된 메소드이며, 이러한 메소드를 "instance method"라고 한다.
  - 인스턴스를 사용하며 호출되기 때문

- 인스턴스 메소드를 사용할 때는 . (dot notation)을 사용하여야 한다.

## 인스턴스 생성하기
- **new** 키워드를 이용하여 클래스의 인스턴스를 생성할 수 있다.

```
package CSE0000;

import java.util.Random;

public class MyRandom (

    public static void main(String[] args){
        // TO DO
        Random generator = new Random();
        System.out.println(generator.nextInt());
    }

)
```

- **import**는 특정 라이브러리를 프로그램에서 사용하고자 할 때 쓴다.
- 위 코드에서, generator는 Random의 인스턴스가 된다.
- nextInt는 Random 클래스의 인스턴스 메소드이다.

<br>

# 일반 자료형

## Integer types
: 정수형
- byte (1 byte): -128 ~ 127
- short (2 bytes): -32,768 ~ 32,767
- int (4 bytes): -2,147,483,648 ~ 2,147,483,647
- long (8 bytes): -9,223,372,036,854,775,808 ~ 9,223,372,036,854,775,807

<br>

- 그냥 정수를 입력할 경우, java는 int로 인식한다.
- long 타입 정수를 사용하고 싶을 때, 끝에 L을 붙이면 된다.
  - 400000 → int
  - 400000L → long
- hexadecimal을 사용할 수 있다.
  - 0xCAFEBABE
- binary number
  - 0b1001

## Floating-point types
: 실수형

- float (4 bytes): 6~7-digit precision
- double (8 bytes): 15-digit precision

<br>

- 그냥 실수를 입력할 경우, java는 double로 인식한다.
  - 3.14 → double type
  - 3.14E5 → double type (3.14 * 10^5)
    - E: exponent 
  - 3.14F → float type

## Char type

: 문자형

- java에서는 String 형이 char 형보다 더 많이 쓰인다.

## Boolean type

- true, false
- true != 1, false != 0
  - ⚠ true, false는 넘버가 아니다.
- boolean을 정수로 바꿀 수 없다.

<br>

# 변수

- 기본적인 문법은 C/C++과 비슷하다.
- 변수 선언
  - int total;
  - int total = 0;
  - int total = 0, count;
  - Random generator = new Random();

- 변수 이름
  - 문자로 시작해야 한다.
  - 문자, 숫자, _ , $를 포함할 수 있다.
  - 대소문자 따진다.

- 변수는 사용되기 전에 초기화 되어야 한다.
  - 증감 연산자의 경우 오류가 발생할 수 있다.

<br>

## 상수
  - **final** 키워드를 통해 선언한다.
  - 선언된 후에는 값을 변경할 수 없다.
  - 관습에 따라 대문자로 선언하는 것이 좋다.

<br>

# 연산자

- C/C++과 비슷

## 산술 연산자
-  +, -, *, /, %
  - 나누기
    - 연산자와 피연산자가 둘 다 정수이면 결과 값도 정수이다.
    - 둘 중 하나가 실수인 경우 결과 값은 실수이다.

## 증감 연산자
  - n++;
  - n--;

## Mathematics methods
- Math.pow(x, y) → x^y
- Math.sqrt(x) → x의 제곱근
- Math.min
- Math.max
- Math.PI
- Math.E
- Math.random() → 0 이상 1미만의 랜덤 숫자

<br>

- 이 메소드들은 static method이다
- 즉, static으로 선언되었으며, 인스턴스를 생성하지 않아도 쓸 수 있다.
  - new 이런거 안 써도 된다는 말

## 형변환
- 연산자와 피연산자가 다른 타입일 경우 자동적으로 형변환이 이루어진다.
- 우선순위
  - double
  - float
  - long
  - int
- 프로그래머가 명시적으로 형변환을 할 수도 있다.
- 자기보다 큰 타입의 데이터가 할당되려고 할 때, 명시적 형변환이 필요하다.
  - short s = 100 + 1;
    - error! 100+1은 integer임.
  - short s = (short)(100 + 1);


## 관계 연산자
- ==
- !=
- <
- \>
- <=
- \>=
- 이 연산자들은 true or false를 반환함

## 논리 연산자
- &&
- ||
- !

## 할당 연산자
- +=
- -=
- *=
- /=
- %=
- <<=
- \>>=
- |=
- &=
- ^=

## 조건 연산자
`time < 12 ? "am" : "pm"`

12시 이전이면 am, 아니면 pm

## Bit-wise 연산자 & shift 연산자

- op1 & op2
  - 두 비트를 AND 연산
- op1 | op2
  - 두 비트를 OR 연산
- op1 ^ op2
  - 두 비트를 XOR 연산
- ~op1
  - 비트를 뒤집음
- op1 >> op2
  - 비트를 오른쪽으로 미는 연산
  - op1을 2씩 나누기
- op1 << op2
  - 비트를 왼쪽으로 미는 연산
  - op1을 2씩 곱하기

<br>

# 문자열

- 자바에서 String 타입을 지원하지는 않지만 String 클래스를 지원한다.
```
String location = "Java";
String greeting = "Hello" + location;
```
- 두 문자열은 '+' 연산자로 결합할 수 있다.
```
int age = 42;
String output = age + "years"
```
- 문자열을 결합할 때, 두 타입이 다르다면 그것은 그냥 문자열이 된다.

## Static Methods
- join
```
String names = String.join(", ", "Peter", "Paul", "Mary");
// names = "Peter, Paul, Mary"
```

## Instance Methods
- substring
```
String greeting = "Hello, World!";
String location = "greeting.substring(7, 12);
// location = "World"
```
- split
```
String names = "Peter, Paul, Mary";
String[] result = names.split(", ");
// result = ["Peter", "Paul", "Mary"]
```
- equals
```
location.equals("World");
// location이 World가 맞다면 true를 반환한다.
```

## 정수를 문자열로 바꾸기
- Integer.toString
```
int n = 42;
String str = Integer.toString(n);
```

## 문자열을 정수로 바꾸기
- Integer.parseInt
```
String str = "101010";
int n = Integer.parseInt(str);
```

## Double과 문자열 간 변환
- Double.toString
- Double.parseDouble

<br>

# 입출력

## 입력

- Scanner 클래스의 nextLine 메소드는 standard input으로부터 한 라인을 읽어온다.

```
Scanner in = new Scanner(System.in);
System.out.println("What is your name?");
String name = in.nextLine();
```

- **next**: 공백으로 구분된 한 단어를 읽어 온다.
- **nextInt**: 하나의 정수를 읽어 온다.
- **nextDouble**: 하나의 실수를 읽어 온다.

## 출력

- **System.out.print**: 출력하고 난 후에 다음 줄로 넘어가지 않는다.
- **System.out.println**: 출력한 후에 다음 줄로 넘어간다.
- **System.out.printf**: 형식을 지정한 출력
```
System.out.printf("%8.2f", 1000.0/3.0);

System.out.printf("Hello, %s. Next year, you will be %d.\n", name, age);
```
- Conversion character
  - d: integer
  - x: hexadecimal number
  - f: floating point
  - c: character
  - s: string
  - b: boolean
```
System.out.printf("%,+.2f", 100000.0/3.0);
// +33,333.33
```

- Flags
  - +: 부호 출력
  - -: 왼쪽 정렬
  - 0: 숫자 앞을 0으로 채움
  - (: 음수이면 괄호 안에 넣어준다.
  - ,: 숫자를 세자리 씩 ,로 끊어서 출력

- **String.format**: standard output으로 출력하는 것 대신 String을 반환한다.
```
String message = String.format("Hello %s. Next year, you'll be %d\n", name, age);
```

# 흐름 제어문
## If
```
if(condition 1) {

}
else if(condition 2) {

}
else {

}
```

## for
```
for(initialization; condition; update){

}
```
- 무한 루프
```
for(i=1; true; i++){

}

for(i=10; ; i--){

}

for( ; ; ){

}
```

## while
```
while(condition) {

}
```

## Do-while
```
do{

} while(condition);
```

## Switch
```
switch(choice){
  case 1: <statement 1> break;
  case 2: <statement 2> break;
  .
  .
  .
  default: <statement N> break;
}
```

## break & continue
- break: 반복문 탈출
- continue: 다음 루프로 건너뜀

<br>

# 배열

- **new** 연산자가 메인 메모리의 힙 영역에 배열을 만든다.

- `int[] a = new int[10];`
- `int a[] = new int[10];`

- 초기값
  - **int, long, float ...**: 0
  - **boolean**: false
  - **char**: 아스키코드 0
  - **string, frame ...**: null

## 값 할당하기

```
int a[] = {1,3,5,7,9};

// a[0] = 1, a[1] = 3, a[2] = 5, a[3] = 7, a[4] = 9
```
- a.length
  - 배열의 크기 반환

## 배열 복사하기

- '=' 연산자를 통한 배열 복사
  - b = a

- arraycopy()를 통한 배열 복사
  - `System.arraycopy(srcArray, i, destArray, j, n);`
    - srcArray: source array
    - i: srcArray의 시작점
    - destArray: destination array
    - j: destArray의 시작점
    - n: 복사할 개수

- 차이점
  - '='를 이용한 복사는 주소 복사이므로 a의 값이 변하면 b의 값도 변한다.
  - arraycopy를 이용하는 것은 단순한 데이터 복사이므로 서로 영향이 없다.

## 다차원 배열
- 2차원 배열
```
int[][] a = new int[3][4];
int a[][] = new int[3][4];
```

a.length = 3 (row)  
a[0].length = 4 (column)

- 3차원 배열
```
boolean[][][] a = new boolean [3][4][5];
```