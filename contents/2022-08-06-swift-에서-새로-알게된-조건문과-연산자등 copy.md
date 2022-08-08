---
date: '2022-08-06'
title: 'swift 에서 새로 알게된 조건문과 연산자등'
categories: ['TIL', 'Swift']
summary: 'swift 에서 새로 알게된 조건문과 연산자등'
---

## 범위연산자

```swift
  var random = Int.random(in: 1...3)

  print(random) // 랜덤한 정수값 출력
```

위와같이 범위연산자 `...` 를 사용해서 1~3 사이의 값을 표기할 수 있다.

<br/>

## switch문 fallthrough

```swift
var num = 10

switch num {
  case ..<10:
    print("10보다 작다.")
    fallthrough

  case 10:
    print("10이다.")
    fallthrough

  default:
    print("끝")
}

// "10이다.", "끝" 출력
```

`switch` 문에서 `fallthrough` 를 사용하면 매칭된 값에 대한 고려 없이 무조건 다음 블럭을 실행한다.

<br/>

## 패턴매칭 연산자와 범위 연산자

```swift
var num = 30

if num ~= 0...50 {
  print("num은 0 ~ 50 사이에 속한다")
}

var tempreature = 23

switch tempreature {
  case ..<0:
    print("영하 ~ 0도 미만")

  case 0...18:
    print("0 ~ 18도")

  case 18...:
    print("19도 이상")

  default:
    break
}

// "num은 0 ~ 50 사이에 속한다", "19도 이상" 출력
```

범위연산자와 패턴매칭 연산자를 사용하여 조건문을 실행시킬수 있다.

<br/>

## switch문과 where절

```swift
  let var = 10

  switch num {
    case let n where n % 2 === 0: // num 을 n이라는 변수에 '바인딩' 한 뒤 where절로 조건을 확인
      print("짝수입니다.")

    case let n where n % 2 !== 0:
      print("홀수입니다.")

    default:
      break
  }
```

`switch` 문에서 참/거짓 외에 다른 조건을 검사하고 싶을때

위와같이 `where` 절의 밸류 바인딩 패턴과 함께 사용한다.
