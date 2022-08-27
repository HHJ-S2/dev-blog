---
date: '2022-08-23'
title: '콜렉션-타입(Collection type) - 집합(Set)'
categories: ['TIL', 'Swift']
summary: '콜렉션 타입(Collection type) - 집합(Set)'
---

## 집합(Set)

```swift
  let numbers: Set<Int> = [1, 2, 3]
  let numbers2: Set = [4, 5, 6]

  let emptySet: Set<Int> = []
```

셋(Set)은 순서가 없는 유일한 데이터의 집합이다.

배열과 표기 방법이 같아서 헷갈릴 수 있기 때문에 타입 지정이 필수이다.

값이 중복되지 않도록 저장할때 주로 사용한다.

<br/>

## Set 변경

```swift
  var fruits: Set = ["apple", "banana", "cherry"]

  // 요소 추가
  fruits.update(with: "orange") // nil 반환
  fruits // {"apple", "orange", "cherry", "banana"}

  // 요소 삭제
  fruits.remove("apple") // "apple" 반환
  fruits // {"orange", "cherry", "banana"}
```

<br/>

## Set 기능들

```swift
  var all: Set = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  var odd: Set = [1, 3, 5, 7, 9]
  var even: Set = [2, 4, 6, 8, 10]

  // 부분집합 여부
  odd.isSubset(of: all) // true
  all.isSubset(of: odd) // false

  // 합집합
  var newUnion = odd.union(even)
  print(newUnion) // [9, 5, 1, 4, 8, 10, 2, 7, 6, 3]

  // 교집합
  var newInterSet = odd.intersection(even)
  print(newInterSet) // []
```
