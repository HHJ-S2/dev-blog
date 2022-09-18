---
date: '2022-09-17'
title: '확장(Extension)'
categories: ['TIL', 'Swift']
summary: '확장(Extension)'
---

## 확장(Extension)

```swift
// 애플이 만들어놓은 Double 인스턴스에
// 미터를 기준으로 단위를 바꿔서 출력하는 기능 확장
extension Double {
  var km:Double { return self * 1_000.0 }
  var m: Double { return self }
  var cm: Double { return self / 100.0 }
  var mm: Double { return self / 1_000.0 }
  var ft: Double { return self / 3.28084 }
}

10.0.km // 10000 m
3.ft // 0.9143...m
```

확장은 현재 존재하는 타입에서 <b>기능(메서드)를 추가하고 싶을때</b> 사용한다.

타입은 클래스, 구조체, 열거형, 프로토콜타입에 확장이 가능하다.

새 기능을 추가할 수는 있지만 기존 기능을 재정의 하는것은 원칙적으로 불가능하다. (`objc` 키워드를 표기하면 가능하기는 하다.)

<br/>

확장할 수 있는 메서드를 정리하면 다음과 같다.

1. (타입)계산속성, (인스턴스)계산속성
2. (타입)메서드, (인스턴스)메서드
3. 새로운 생성자 (클래스는 편의생성자만 가능, 지정생성자 및 소멸자는 본체에 구현)
4. 서브스크립트
5. 새로운 중첩타입 정의 및 사용
6. 프로토콜 채택 및 프로토콜 관련 메서드

저장속성은 확장이 불가능하다.
