---
date: '2022-08-07'
title: 'swift 튜플(Tuple)'
categories: ['TIL', 'Swift']
summary: 'swift 튜플(Tuple)'
---

## 튜플(Tuple)

```swift
  let twoNumbers: (Int, Int) = (1, 2)
  print(twoNumbers.0) // 1 출력

  let student: (String, Int, String) = (name: "Rena", age: 14, address: "울산")
  print(student.address) // "울산" 출력

  let (name, age, address): (String, String, String) = ("Jun", 36, "부산")
  print(name) // "Jun" 출력
```

복수개의 데이터의 조합을 저장하는 튜플

처음 튜플을 할당할때 결정된 데이터의 종류 및 갯수는 변경이 불가하다.

자바스크립트 객체와 같은것 같은데 작성 방법이 좀 다르다.

<br/>

## 튜플의 값의 비교

```swift
  (2500, "apple") < (3000, strowbery) // true
  (true, "A") > (false, "B") // error
```

두개의 튜플을 서로 비교할 수 있다.

비교를 할때는 튜플의 첫번째 값부터 순차적으로 비교해서 참/거짓을 판단한다.

만약 튜플의 값중에 참/거짓이 들어있으면 그 값은 비교가 불가능 하기 때문에 에러가 발생한다. (`==`은 가능)

<br/>

## 튜플과 switch문

```swift
  let (name, age, address): (String, String, String) = ("Jun", 36, "부산")

  switch (name, age, address) {
    case (_, _, "서울"):
      print("서울")

    case ("Jun", _, _):
      print("Jun")

    default:
      break
  }

  let point = (0, 7)

  switch point {
    case let (x, y) where x == y:
      print("x == y")

    case let (x, y) where x == -y:
      print("x == -y")

    case let (x, y)
      print("\(x) == \(y)")
  }
```

와일드카드 패턴(`_`)과 `where`절을 이용해서 switch문에 조건을 걸 수 있다.
