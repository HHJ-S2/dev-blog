---
date: '2022-09-18'
title: '프로토콜(Protocols)'
categories: ['TIL', 'Swift']
summary: '프로토콜(Protocols)'
---

## 프로토콜(Protocols)

프로토콜을 알기 전에 클래스 상속의 단점을 먼저 생각해볼 필요가 있다.

<br/>

<b>클래스와 상속의 단점</b>

1. 클래스는 하나의 클래스만 상속이 가능하다. (다중 상속이 불가능하다.)
2. 기본적인 상위클래스의 메모리 구조를 따라갈 수 밖에 없다. (<b>필요하지 않은 속성/메서드도 같이 상속받는다.</b>)
3. 클래스(레퍼런스 타입)에서만 가능하다.

<br/>

클래스 내부에 저장속성이나 메서드가 많아지고 상속이 복잡해질수록 위 단점들이 부담스러워질것이다.

이때 프로토콜을 사용하면 단점들을 어느정도 보완할 수 있게된다.

<br/>

프로토콜이란 실생활에서 자격증의 개념과 비슷한데,

우리가 자동차운전면허증을 따면 사람들 각각이 운전이라는 능력을 얻을 수 있는것처럼 <b>간단한 규칙만 따르면 능력을 갖게된다.</b>

어떤 기능을 갖고있는 프로토콜(자격증)을 정의한 후 다른 클래스에서 사용하기만 하면 되는것이다.

<br>

## 예시

<b>프로토콜을 사용하지 않았을때</b>

<br/>

```swift
class Bird {
  var isFemale = true

  func layEgg() {
    if isFemale {
      print("새가 알을 낳는다.")
    }
  }

  func fly() {
    print("새가 날아간다.")
  }
}

class Eagle: Bird {
  // isFemale
  // layEgg()
  // fly()

  func soar() {
    print("공중으로 치솟아 날아간다.")
  }
}

class Penguin: Bird {
  // isFemale
  // layEgg()
  // fly() // 상속구조에서 어쩔수 없이 날게된 펭귄

  func swim() {
    print("헤엄친다.")
  }
}

// 구조체가 될 수 없고, 무조건 Bird를 상속해야함.
class Airplane: Bird {
  // isFemale
  // layEgg() // 상속구조에서 알을 낳게된 비행기

  override func fly() {
    print("비행기가 날아간다.")
  }
}

struct FlyingMuseum {
  func flyimgDemo(flyingObject: Bird) {
    flyingObject.fly()
  }
}

// fly() 라는 메서드를 굳이 상속을 하지 않고 사용하고싶다.
// 꼭 클래스가 아닌, 구조체에서도 fly()를 동작하게 하고싶다.
```

<br/>

<b>프로토콜을 사용했을때</b>

<br/>

```swift
protocol CanFly {
  func fly() // 구체적인 구현은 채택한 곳에서
}

class Eagle: Bird, CanFly {
  func soar() {
    print("공중으로 치솟아 날아간다.")
  }
}

class Penguin: Bird {
  func swim() {
    print("헤엄친다.")
  }
}

struct Airplane: CanFly {
  // 구조체에서 프로토콜의 fly()만을 가져와서 사용
  func fly() {
    print("비행기가 날아간다.")
  }
}

struct FlyingMuseum {
  // CanFly 프로토콜을 타입으로 인식 가능
  func flyimgDemo(flyingObject: CanFly) {
    flyingObject.fly()
  }
}

let airplane1 = Airplane()
let penguin1 = Penguin()
let eagle1 = Eagle()

let museum = FlyingMuseum()

// canFly를 채택한 eagle1, airplane1 만 박물관에 전시 가능
museum.flyimgDemo(flyingObject: eagle1)
museum.flyimgDemo(flyingObject: airplane1)
// museum.flyimgDemo(flyingObject: penguin1)
```
