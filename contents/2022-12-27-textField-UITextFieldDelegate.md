---
date: '2022-12-27'
title: 'UITextFieldDelegate'
categories: ['TIL', 'Swift', 'iOS']
summary: 'textField의 UITextFieldDelegate 프로토콜 사용해보기'
---

## UITextFieldDelegate

```swift
import UIKit

class ViewController: UIViewController, UITextFieldDelegate { // UITextFieldDelegate 채택

  @IBOutlet weak var textField: UITextField!
  @IBOutlet weak var button: UIButton!

  override func viewDidLoad() {
    super.viewDidLoad()

    // delegate 설정
    textField.delegate = self

    setUp()
  }

  func setUp() {
    view.backgroundColor = UIColor.gray
    textField.keyboardType = UIKeyboardType.emailAddress
    textField.placeholder = "이메일 주소"
    textField.borderStyle = .roundedRect
    textField.clearButtonMode = .whileEditing
    button.layer.cornerRadius = 8
  }

  // UITextFieldDelegate를 채택했기 때문에 사용가능
  func textFieldShouldBeginEditing(_ textField: UITextField) -> Bool {
    // 필드에 입력가능 여부를 결정
    print(#function) // 해당 메서드가 호출되었을때 print
    return true
  }

  func textFieldDidBeginEditing(_ textField: UITextField) {
    // 필드에 입력을 시작한 순간 호출
  }

  func textFieldShouldClear(_ textField: UITextField) -> Bool {
    // 필드의 clear 버튼 사용가능 여부를 결정
    return true
  }

  func textField(_ textField: UITextField,
    shouldChangeCharactersIn range: NSRange,
    replacementString string: String) -> Bool {
      // 필드에 변경사항이 있을때(onChange) 호출
      print("string:", string)
      return true
  }

  func textFieldShouldReturn(_ textField: UITextField) -> Bool {
    // enter키 입력가능 여부를 결정
    return true
  }

  func textFieldShouldEndEditing(_ textField: UITextField) -> Bool {
    // 필드의 입력이 완료될때 호출, 완료가능 여부를 결정
    return true
  }

  func textFieldDidEndEditing(_ textField: UITextField) {
    // 실제로 필드에 입력이 완료되었을때 호출
  }
}
```
