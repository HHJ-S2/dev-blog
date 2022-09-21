---
date: '2022-09-19'
title: '프로토콜(Protocols) 사용하기'
categories: ['TIL', 'Swift']
summary: '프로토콜(Protocols) 사용하기'
---

## 프로토콜(Protocols) 문법

### 메서드 작성시 요구사항

```swift
  protocol myProtocol {
    var id: String { get }
    static var type: String { get set }

    func doSomething1 ()
    static func doSomething2 ()
    mutating func soSomething3 ()
  }

  class SomeClass: SuperClass, myProtocol {
    // 채택한 프로토콜 구현
  }
```

프로토콜을 채택할때는 상속받는 상위클래스가 있는경우 이를 먼저 명시한 후, 프로토콜 이름을 작성해준다.

프로토콜 작성시 최소한의 요구사항(get, set...)을 지정해야한다.

타입메서드를 클래스에서 채택해서 구현하는경우 static, class 키워드 모두 가능하다.

관습적으로 프로토콜은 확장(Extension)에서 채택한다.

<br/>

<b>계산속성</b>

- get: `let`, `var` <br/>
- get, set: `var`

<b>계산타입속성</b>

- `static` 키워드로 구현 <br/>
- 클래스에서는 `static`, `class` 모두 가능

### 예제

```swift
protocol Togglable {
  mutating func toggle()
}

enum OnOffSwitch: Togglable {
  case on, off

  mutating func toggle() {
    switch self {
    case .off:
      self = .on
    case .on:
      self = .off
    }
  }
}

var 스위치 = OnOffSwitch.off
스위치.toggle()
```

구조체에서 저장속성을 변경하는 함수를 구현할때는 `mutating` 키워드가 필요한데 프로토콜에도 이를 명시해야한다.

<br/>

### 프로토콜에서의 생성자

```swift
protocol Protocol1 {
  init()
  subscript(index: Int) -> Int { get set }
}
```

프로토콜에 생성자를 요구사항으로 지정 가능하다.

- 클래스에서 생성자 채택시, 하위클래스를 고려하여 `required` 키워드를 붙여야한다.
- 클래스가 `final`로 선언되면 `required`키워드를 생략할 수 있다.
- 클래스에서는 반드시 지정생성자로 구현할 필요는 없다. (편의생성자로 구현 가능)
- 실패가능생성자(`init?()`)는 -> `init()`, `init?()`, `init!()`로 구현 가능하다.

<br/>

### 프로토콜에서의 서브스크립트

```swift
protocol SubScriptProtocol {
  init()
  subscript(index: Int) -> Int { get set }
}
```
