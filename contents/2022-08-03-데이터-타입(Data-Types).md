---
date: '2022-08-03'
title: '데이터 타입(Data Types)'
categories: ['Swift']
summary: '데이터 타입(Data Types)'
---

## 스위프트에서 사용하는 데이터 타입 정리

타입은 메모리 공간의 크기와 연관이 있어서,

변수를 선언할때 메모리에 값을 어떤 형태로 저장할 것인지 타입으로 지정해 주어야 한다.

### 자주 사용하는 데이터 타입

- Int: 정수(Integer)
- Double: 실수(부동소수점) 15자리 소수점
- String: 문자열
- Bool: 참, 거짓 (true, false)

\*\* swift 에서 타입은 첫글자를 대문자로 쓴다.

<br/>

```swift
let four: Int = 4

let treePointOneFour: Double = 3.14

let chr: Character = "a"
let char2: Character = " " // 빈 문자열은 안되지만 공백은 가능

let str: String = "문자열"
let str2: String = "" // 빈 문자열 가능

type(of: chr) // 데이터 타입 확인
```
