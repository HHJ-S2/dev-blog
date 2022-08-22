---
date: '2022-08-22'
title: '콜렉션 타입(Collection type) - 딕셔너리(Dictionary)'
categories: ['TIL', 'Swift']
summary: '콜렉션 타입(Collection type) - 딕셔너리(Dictionary)'
---

## 딕셔너리(Dictionary)

```swift
  let numbers: Dictionary<Int, Int> = [1: 1, 2: 2, 3: 3]
  let user: Dictionary<String, String> = ["Name": "July", "Gender": "female", "Like": "flower"]

  let numbers2: [Int: Int] = [1: 1, 2: 2, 3: 3]
  let user2: [String: String] = ["Name": "July", "Gender": "female", "Like": "flower"]
```

딕셔너리는 key와 value가 한 쌍으로 이루어져 있고, 순서가 없는 해셔블한 타입의 값이다.

위와같이 표준문법, 단축문법으로 타입 표기가 가능하다.

<br/>

## 빈 딕셔너리 생성 방법

```swift
  let emptyDictionary: Dictionary<String, String> = [:]
  let emptyDictionary2 = Dictionary<String, String>()
  let emptyDictionary3 = [String: String]()
```

<br/>

## 딕셔너리 변경

```swift
  var user: Dictionary<String, String> = [:]

  user["Name"] = "Jun"
  user // ["Name": "Jun"]

  user["Gender"] = "female"
  user["Gender"] = "meal"
  user // ["Gender": "meal", "Name": "Jun"]
```

빈 딕셔너리에 값을 추가하거나 이미 있는 값을 덮어써서 수정할 수 있다.

<br/>

## 딕셔너리 삭제

```swift
  var user: Dictionary<String, String> = ["Name": "July", "Gender": "female", "Like": "flower"]

  user["Name"] = nil
  user // ["Gender": "female", "Like": "flower"]
```
