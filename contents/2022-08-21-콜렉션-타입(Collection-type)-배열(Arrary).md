---
date: '2022-08-21'
title: '콜렉션 타입(Collection type) - 배열(Arrary)'
categories: ['TIL', 'Swift']
summary: '콜렉션 타입(Collection type) - 배열(Arrary)'
---

## 배열(Array)

```swift
  let numbers: Array<Int> = [1, 2, 3]
  let numbers2: [Int] = [4, 5, 6]

  let fruits: Array<String> = ["apple", "orange", "banana"]
  let flowers: [String] = ["daisy", "rose", "tulip"]
```

스위프트에서 배열은 위와 같이 선언 할 수 있으며 데이터 타입은 `Array<Int>`나 `[Int]` 처럼 표기할 수 있다.

배열의 경우 값이 없을수도 있기 때문에 옵셔널타입으로 정의 된다.

<br/>

## 빈 배열 생성 방법

```swift
  let emptyArray = [] // error
  let emptyArray2: [Int] = []

  let emptyArray3 = Array<Int>()

  let empryArray4 = [Int]()
```

`emptyArray`처럼 빈 배열을 생성할때 타입을 지정해 주지 않아서 에러가 나는 경우 타입 지정을 해 주어야 한다.

또는 생성자(`()`) 를 이용해서 빈 배열을 생성할 수 있다.

<br/>

### 배열의 기본 메서드

```swift
  var numbers: [Int] = [1, 2, 3, 4, 5]

  numbers.count // 5
  numbers.isEmpty // false

  numbers.contains(1) // true
  numbers.contains(8) // false

  numbers.randomElement() // 랜덤 값 추출

  numbers.swapAt(0, 1) // [2, 1, 3, 4, 5] 인덱스 순서 변경
```

### 배열의 요소에 접근

```swift
  var fruits: Array<String> = ["apple", "orange", "banana"]

  fruits.first // 첫번째 인덱스의 값을 추출
  fruits.last // 마지막 인덱스의 값을 추출

  type(of: fruits.first) // Optional<String>

  fruits.startIndex // 0
  fruits.endIndex // 3
```

<br/>

### 삽입하기(insert)

```swift
  var alphabet = ["A", "B", "C"]
  alphabet.insert("D", at: alphabet.endIndex) // ["A", "B", "C", "D"]
```

```swift
  var alphabet = ["A", "B", "C"]
  alphabet.insert(contentsOf: ["a", "b", "c"], at: alphabet.endIndex) // ["A", "B", "C", "a", "b", "c"]
```

<br/>

### 교체하기(replace)

```swift
  var alphabet = ["A", "B", "C"]

  alphabet[0] = "a" // ["a", "B", "C"]

  alphabet[0...2] = ["a", "b", "c"] // ["a", "b", "c"]
  alphabet.replaceSubrange(0...2, with: ["a", "b", "c"]) // ["a", "b", "c"] 위와 동일

  alphabet[0...2] = [] // []
```

<br/>

### 추가하기(append)

```swift
  var alphabet = ["A", "B", "C"]

  alphabet += ["D"] // ["A", "B", "C", "D"]
```

```swift
  var alphabet = ["A", "B", "C"]

  alphabet.append("D") // ["A", "B", "C", "D"]
  alphabet.append(contentsOf: ["E", "F"]) // ["A", "B", "C", "D", "E", "F"]
```

### 삭제하기(remove)

```swift
  var alphabet = ["A", "B", "C"]

  alphabet.remove(at: 0)
  print(alphabet) // ["B", "C"]

  alphabet.removeSubrange(0...1)
  print(alphabet) // []
```

```swift
  var alphabet = ["A", "B", "C", "D", "E", "F"]

  alphabet.removeFirst() // 첫번째 요소 삭제
  alphabet.removeLast() // 마지막 요소 삭제
  alphabet.removeLast(2) // 마지막 순서의 요소 2개 삭제

  alphabet.removeAll() // 모든 요소 삭제
```
