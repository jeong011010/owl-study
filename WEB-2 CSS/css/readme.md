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


## 선택자

선택자의 종류와 우선순위.

- 태그
- class (.)
- id    (#)

위 순서대로 우선순위가 높다.  
구체적인 것을 포괄적인 것보다 우선순위를 높인다.

### 하위 선택자

특정 id 안에 포함된 태그에 css를 적용시키고 싶을 때,
```
#id 태그 { style }
```
위와 같이 띄어쓰기로 하위 선택자를 선택할 수 있다.

## BOX model

__CSS에서 아이템을 정렬하기 위한 레이아웃 기능__  

- 블록 박스

>- 상위 container 에서 사용 가능한 공간을 채움
>- 새로운 줄로 행갈이를 함
>- width, height 속성이 적용됨
>- padding, margin 속성이 적용됨

- 인라인 박스

>- 새 줄로 행갈이를 하지 않음
>- width, height 속성이 __적용되지 않음__
>- padding, margin 속성이 __적용되지 않음__
>- 인라인인 경우 포함된 라인 속성에 따라감

### 박스 모델 속성

- border : 태두리 영역
- padding : 태두리와 콘텐츠 사이의 영역
- margin : 태두리와 다른 콘텐츠 사이의 영역
- display : 박스 모델 속성
- width : 넓이
- height : 높이

## GRID

- 페이지를 여러 영역으로 나누었을 때, 자동으로 뭔가 쭈욱 해주는 느낌
- 레이아웃 안의 요소들을 행과 열의 설정에 따라 간단하게 배치해줄 수 있다.

```
display: grid; gird 레이아웃 설정
grid-template-columns: ~~; 열 설정 (열 개수만큼 사이즈 지정)
grid-template-rows: ~~; 행 설정 (행 개수만큼 사이즈 지정)


ex) 
dipslay: gird;
gird-template-columns: 200px 50px 100px;
```

__grid__ 속성을 사용하면 편리하게 레이아웃 배치를 설정할 수 있다.