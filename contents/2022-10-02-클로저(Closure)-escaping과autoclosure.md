---
date: '2022-10-02'
title: '클로저(Closure) - @escaping, @autoclosure'
categories: ['TIL', 'Swift']
summary: '클로저(Closure) - @escaping, @autoclosure'
---

## @escaping

### @escaping 사용 예시

- 어떤 함수의 내부에 존재하는 클로저를 외부 변수에 저장하는 경우 사용한다.

```swift
var savedFunc = { print("1") }

// 파라미터로 받은 클로저를 외부로 할당할때 escaping(탈출)시킨다.
func escapingFunc1(closure: @escaping () -> ()) {
  savedFunc = closure
}

escapingFunc1 { print("2") }

savedFunc() // "2"
```

<br/>

- GCD (비동기 코드 사용시)

```swift
func escapingFunc2(closure: @escaping (String) -> ()) {
  let name = "Any"

  // 1초 뒤에 실행
  DispatchQueue.main.asyncAfter(deadline: .now() + 1) {
    closure(name)
  }
}

escapingFunc2(closure: { name in
  print("name: \(name)")
})
```

<br/>

### @autoclosure 사용 예시

`@autoclosure` 키워드 사용시 자동으로 클로저를 만들어준다.

파라미터가 없는 경우에만 사용 가능하다.

<br/>

```swift
func printBoolToString(closure: @autoclosure () -> Bool) {
  if closure() {
    print("Y")
  } else {
    print("N")
  }
}

let num = 1

printBoolToString(closure: num == 1)
```
