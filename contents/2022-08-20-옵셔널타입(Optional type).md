---
date: '2022-08-20'
title: '옵셔널타입(Optional type)'
categories: ['TIL', 'Swift']
summary: '옵셔널타입의 여러 케이스들'
---

```swift
  var number: Int?
  var text: String?
  var number2: Double?
```

옵셔널 타입은 값이 없을수도 있는 상황일때 자료형 뒤에 `?`기호를 붙혀서 사용한다.

값을 따로 초기화하지 않으면 자동으로 `nil`로 초기화 된다.

옵셔널 타입에서의 `nil`은 실제로 값이 없는것이 아니라 '값이 없다는 의미를 갖고있는 값'이다.

<br/>

## 옵셔널타입 값 사용(unWrapping)

```swift
  let optionalInt: Int? = 10

  print(optionalInt) // warning
  print(optionalInt!) // Optional(10)
```

옵셔널 타입의 값을 강제로 추출할때는 변수명 뒤에 `!`를 붙힌다.

값이 초기화 되어있는, `nil`이 아닌 경우에만 가능하다.

<br/>

```swift
  let num1: Int? = 10
  let num2: Int? = 20

  print(num1 + num2) // error
```

옵셔널 타입끼리의 계산은 불가능 하다.

<br/>

## 옵셔널 바인딩

```swift
  let hello: String? = "hello"

  if let temp = hello {
    print(temp)
  }

  func checkOptionalType (hello: String?) {
    guard let temp2 = hello else { return }

    print(temp2)
  }
  checkOptionalType(hello: hello)
```

옵셔널타입인지 판단한뒤 특정 조건을 실행시키고 싶을때

옵셔널타입인 변수를 `if`문이나 `guard`문 조건에서 밸류 바인딩 패턴과 함께 사용한다.

값이 새로운 상수에 바인딩이 된다면(=값이 있다면) 옵셔널 값인지 판단할 수 있다.

<br/>

## Nil-Coalescing 연산자

```swift
  var name: String?
  var user = name ?? "unnamed user"

  print(user) // unnamed user 출력
```

`??`연산자를 사용해서 옵셔널 타입인 변수에 값이 `nil`이라면 기본값을 설정 할 수 있다.

<br/>

## 옵셔널 타입의 파라미터

```swift
  func printUser(name: String, age: Int? = nil) {
    print(name)

    if let tempAge = age {
      print(tempAge)
    }
  }

  printUser(name: "Annie") // "Annie" 출력
  printUser(name: "James", age: 14) // "James", 14 출력
```

함수 파라미터에 옵셔널타입을 지정하고 `nil`로 초기화 해주면

함수를 호출할때 해당 옵셔널 타입의 파라미터는 인수로 전달 하지 않아도 된다.
