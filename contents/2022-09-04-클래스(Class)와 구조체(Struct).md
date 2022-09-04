---
date: '2022-09-04'
title: '클래스(Class)와 구조체(Struct)'
categories: ['TIL', 'Swift']
summary: '클래스(Class)와 구조체(Struct)'
---

## 클래스(Class)

```swift
  class Book {
    var name = "책 제목"
    var author = "책 저자"
    var price = 0

    func printPrice() {
      print("이 책의 가격은 \(self.price)원 입니다.")
    }
  }

  var book1 = Book()

  book1.name = "스위프트"
  book1.author = "Any"
  book1.price = 3000

  book1.printPrice() // 이 책의 가격은 3000원 입니다.
```

클래스는 변수와 함수를 하나로 묶을수 있는 틀이다.

클래스는 타입이기때문에 네이밍을 대문자로 시작해야 한다.

클래스 내부의 변수는 속성(property)이라고 하고 함수는 메서드(method)라고 한다.

클래스로 찍어낸 데이터는 인스턴스(instance) 또는 객체(Object)라고 한다.

<br/>

## 구조체(Struct)

```swift
struct Bird {
  var name = "새"

  func fly() {
    print("날아갑니다.")
  }
}

var bird1 = Bird()

bird1.name = "참새"
```

클래스와 구조체는 거의 유사하다. `struct`라는 틀이 있고 그 틀로 인스턴스를 찍어낼 수 있다.

구조체로 찍어낸 데이터는 인스턴스(instance)라고 한다.

<br/>

### 클래스와 구조체의 차이

클래스와 구조체의 차이는 메모리 저장 방식의 차이이다.

<br/>

클래스는 인스턴스 데이터를 힙에 저장, 해당 힙을 가르키는 변수는 스택에 저장하고, 메모리 주소값이 힙을 가르킨다.

복사시 값을 전달하는 것이 아니고 저장된 주소를 전달한다. `데이터 <-> 힙 <- 스택`

<br/>

구조체는 인스턴스 데이터를 모두 스택에 저장한다. 복사시 값을 전달할때마다 새로운 복사본을 생성한다. `데이터 <- 스택`
