---
date: '2022-09-11'
title: '메서드(Methods) - 서브스크립트(Subscript)'
categories: ['TIL', 'Swift']
summary: '메서드(Methods) - 서브스크립트(Subscript)'
---

## 서브스크립트(Subscript)

```swift
struct Matrix {
  var data = [["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"]]

  // subscript 정의
  subscript(row: Int, col: Int) -> String? {
    if row >= 3 || col >= 3 {
      return nil
    }

    return data[row][col]
  }
}

var matrix1 = Matrix()

// []으로 사용
matrix1[1, 2] // "6"
```

타입 내부에서 `subscript`를 정의하면 인스턴스의 서브스크립트(`[]`)로 접근하여 사용할 수 있다.

위처럼 get블록만 선언하면 읽기전용(read only)의 계산속성이 된다.

타입 서브스크립트로 구현시 서브스크립트 메서드 앞에 `static` 이나 `class` 키워드를 표기하면 된다.
