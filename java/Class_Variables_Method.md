[1. 클래스](#class-definition)  
[2. 인스턴스 변수](#instance-variables)  
[3. 메소드](#methods)  
[4. 캡슐화](#캡슐화)  
[5. 오브젝트 생성](#오브젝트-생성하기)  
[6. 변수의 사용](#변수의-사용)  
[7. Call by value](#call-by-value)

# Class Definition

- 자바에서 대부분의 변수와 리터럴은 object 이다.
- object는 클래스의 인스턴스이다.

<br>

- 하나의 자바 파일은 여러 개의 클래스를 가질 수 있지만, **public class**는 하나만 가질 수 있다.

  - public class의 이름은 자바 파일의 이름과 같아야 한다.
  - Lecture.java → public class **Lecture**

- javac를 통하여 컴파일 되었을 때, javac는 각 클래스마다 .class 파일을 생성한다.
- public class는 main 메소드를 포함하고 있으며 이것은 프로그램의 스타팅 포인트가 된다.

```
class Employee {
    String name;
    public void setName(String name) {
        this.name = name;
    }
    public String getName() {
        return this.name;
    }
}
```

- `String name` → 변수 variables
- `public void setName()` → 메소드 method

# Instance Variables

- 인스턴스 변수는 클래스 내에서 static 키워드 없이 선언된 변수이다.
- `String name` → 인스턴스 변수
- 인스턴스 변수는 하나의 오브젝트 인스턴스에 귀속된다.
  - 즉, 두 개의 인스턴스가 있을 때 각 인스턴스 변수는 독립적인 것이다.

## Access Modifier

- 누가 이 클래스에 접근할 수 있는가?
- **public**: 어떠한 클래스도 전부 가능
- **protected**: 서브 클래스나 같은 패키지 안에 있는 클래스끼리 가능
- **private**: 그 클래스 안에서만 가능

```
class Employee {
    String name;
}

public class Lecture {
    public static void main(String[] args){
        Employee m = new Employee();
        m.name = "Peter";
        System.out.println(m.name);
    }
}
```

- 위 코드에서, class Lecture 는 name 변수에 접근할 수 있다.
  - Lecture와 Employee가 같은 패키지
- 그러나 만약 name이 private이라면 오류가 생긴다.

# Methods

## Method Header

- Access Modifier
  - public, protected, private
- return type
- method name
  - Naming Convention: 첫 글자는 대문자
- arguments

## Method Body

- return 값이 있다면 return 키워드 사용

## this

- 오브젝트의 메소드가 호출되었을 때, 오브젝트 자체를 가리키기 위하여 **this**를 쓴다.

# 캡슐화

- 필요한 것만 public하게 두고 나머지는 감춘다.
- 클래스 밖에서 호출되는 것만 **public**으로 선언하고 나머지는 **private**

```
class Employee {
    private String name;
    public void setName(String name) {
        this.name = name;
    }
    public String getName() {
        return this.name;
    }
}
```

# 오브젝트 생성하기

- **new** 키워드를 통해 오브젝트를 생성한다.
- 오브젝트가 생성될 때, 클래스의 **생성자(constructor)** 가 호출된다. - constructor가 특별히 선언된 것이 아니라면 default constructor가 호출된다.  
  `Employee m = new Employee();`

## 오브젝트 삭제

### Automatic Garbage Collector

- 자바에서는 오브젝트를 삭제할 필요가 없다.
- 오브젝트가 생성되었을 때, 메모리는 오브젝트를 위하여 공간을 할당한다.
- 그러나 실행 시간동안 오브젝트는 어느곳에서도 사용되지 않는 경우가 발생할 수 있다.
- 이 경우 garbage collector가 자동으로 메모리 공간을 해제시켜 다른 오브젝트가 메모리를 사용할 수 있도록 한다.
- Automatic garbage collector가 없으면 개발자가 일일이 메모리 공간을 해제시켜야 하는데 이 경우 메모리 누수가 발생할 수 있다.

## Constructor

- 생성자는 클래스와 같은 이름을 가지고 있으며 리턴 타입은 없다.
- 생성자를 인자와 함께 선언할 수 있다.

```
class Employee {
    private String name;
    public Employee(String name) {
        this.name = name;
    }
    public String getName() {
        return this.name;
    }
}
```

- 다른 인자를 가진 생성자를 여러 개 만들 수 있다.
- 이것을 **Method Overloading** 이라고 부른다.
  - Multiple method of the same name with different arguments.

```
class Employee {
    private String name;
    public Employee() {
        this.name = "NoName";
    }
    public Employee(String name) {
        this.name = name;
    }
    public String getName() {
        return this.name;
    }
}
```

- 생성자 안에서 overloaded constructor를 사용할 수 있다.
- 이 경우, **this**를 이용한다.

```
class Employee {
    private String name;
    public Employee() {
        this("NoName");
    }
    public Employee(String name) {
        this.name = name;
    }
    public String getName() {
        return this.name;
    }
}
```

## 오브젝트 배열 생성하기

- 오브젝트 배열을 생성하는 것이 가능하다.
- 이 경우, 배열의 각 요소는 개별적으로 생성해야 한다.

```
class Employee {
    private String name;
    public Employee(String name) {
        this.name = name;
    }
    public String getName() {
        return this.name;
    }
}
public class Lecture {
    public static void main(String[] args){
        Employee[] m = new Employee[3];
        m[0] = new Employee("Mario");
        m[1] = new Employee("Luigi");
        m[2] = new Employee("Toad");
        System.out.println(m[0].getName());
    }
}
```

# 변수의 사용

## 인스턴스 변수 초기화

- 인스턴스 변수의 초기값을 설정하지 않으면 default value로 초기화 된다.
  - String name의 경우, String의 default value는 null
  - numbers: 0, boolean: false, objects: null
- 로컬 변수는 반드시 초기화 되어있어야 한다. 안 그러면 에러!

### Final Instance Variables

- **final**키워드를 통해 선언될 수 있으며 값 세팅은 생성자를 통해서만 할 수 있다.

```
class Employee {
    private final String name;
    public Employee() {
        this.name = "Donald";
    }
    public String setName(String name) {
        this.name = name;                   // error!
    }
}
```

### Static Variable

- **static**으로 선언된 변수는 클래스에 귀속되며 인스턴스가 아니다.
- 인스턴스 변수는 각 인스턴스에 대하여 독립적이지만,
- static 변수는 모든 인스턴스에 공유된다.
- static 변수는 대부분 변수 선언과 동시에 초기화된다.
- **static initialization block**을 이용하여 초기화 할 수 있다.

```
class Employee {
    private static int lastId;
    static {
        lastId = 0;
    }
    private int id;
    .
    .
    .
}
```

### Static Final Variable

- 클래스와 관련 있는 상수는 static으로 선언하는 것이 일반적이다.
- Math.PI
  - PI가 static 변수가 아니었다면, Math 클래스의 인스턴스를 따로 생성하여 사용해야 한다.

### Static Method

- 클래스에는 귀속되지만 특정한 인스턴스에는 속하지 않는 메소드
  - 메소드를 호출하기 위해 인스턴스를 만들 필요가 없다.
- Math.pow(2, 5);
  - static 메소드이므로, 오브젝트 이름 대신 클래스 이름을 쓴다.
- main 메소드 또한 static 메소드이다.

### Static Variable and Static Method

- 원칙적으로 static 변수는 static 메소드를 이용하여 접근해야 한다.
- static 메소드에서는 this를 사용하지 않는다.
  - this는 오브젝트를 가리키지만, static 메소드는 오브젝트와 관련이 없기 때문이다.
- static 메소드는 인스턴스 변수에 접근할 수 없다.

```
class Employee {
    private static int lastId = 0;
    private int id;
    public Employee() { id = ++lastId; }
    public int getId() { return this.id; }  // cannot be a static method.
    public static int getLastId { return lastId; }  // cannot use this.lastId
}
public class Lecture {
    public static void main(String[] args){
        System.out.println(Employee.getLastId());
        Employee m = new Employee();
        System.out.println(Employee.getLastId());
    }
}
```

# Call by value

```
public class Lecture {
    public static void swap(int a, int b){
        int temp = a;
        a = b;
        b = temp;
    }
    public static void main(String[] args){
        int a1 = 10;
        int a2 = 20;
        swap(a1, a2);
        System.out.println(a1 + " " + a2);
    }
}
```

- Java는 call by value를 사용한다.
- 메소드를 호출할 때 메소드 파라미터에 인자의 값을 복사하여 사용하므로 swap 메소드에서 어떤 짓을 하더라도 a1, a2에는 영향이 없다.
- 배열과 오브젝트를 인자로 넘길때는, 메모리 주소가 call by value로 넘어간다.
  - 이 경우에는 영향을 받는다.
