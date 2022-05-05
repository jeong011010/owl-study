## CSS

__Cascading Style Sheets__   

'font' 태그와 같은 속성이 중복해서 여러번 사용하게 되었을 때,   
그런 태그들을 하나로 묶어 style을 정해줄 수 있는 기능.

## CSS 양식

- 'style' 태그를 사용하여 css를 작성할 수 있음.
- css 파일을 만들어서 작성할 수 있음.
<br>

style을 사용하는 방법.

<br><br>

1. style 태그 사용  
```
style
(태그이름) { 속성; }   
/style

ex) a { color:red; }
```

위와 같이 style sheets를 작성하여 모든 해당 태그에 대해 속성을 설정해줄 수 있음.  
선택한 태그를 __선택자__ 라고 함.

```
a{ <- 선택자. (모든 a태그를 선택)
    color:red; <- 선언, 효과 (선택된 태그에 대한 속성)
}
```

<br><br>

2. style 속성을 사용  
```
style="속성"
ex) a href="1.html" style="color:red"
```

위와 같이 해당 태그에만 style을 설정해줄 수 있음.