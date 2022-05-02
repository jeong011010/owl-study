## Tag

HTML 언어를 설명하는 도구.  
```html
<태그> 내용 </닫는태그>
```
위와 같이 사용

## tag 종류

- h1-h6 : 제목 (heading)
- strong : 강조
- u : 밑줄 (underline)

- p : 단락 (paragraph)

- a : 닻 (anchor)
- br : 줄바꿈

- img : 이미지

- li : 목록 (list)
- ul : li 부모 태그 (unordered list)
- ol : li 부모 태그 (ordered list)

## tag 특징


<details>
<summary>p와 br의 차이</summary>
'p'와 'br'은 줄바꿈의 역할을 하지만 다르다.<br> 
'p'태그는 여는 태그와 닫는 태그 두개를 사용하지만 'br'태그는 하나만 사용하면 줄바꿈이 된다.<br>
그 부분에서는 'br' 태그가 편리하지만 'p'와 같이 여닫는 태그에는 style을 적용시킬 수 있다.<br>
</details>

<details>
<summary>속성 값</summary>
- 'img' 태그에 속성값을 적용할 수 있다.<br>
'src = (주소)' 속성 값을 이용하여 이미지를 불러올 수 있다.<br><br>
- 'a' 태그에서도 좌표, 주소를 가르키는 속성값을 넣는다.<br>
'href = (주소)' 와 같이 사용하여 하이퍼링크를 걸어줄 수 있다.<br><br>

뿐만 아니라 width, size 등등 다양한 속성값이 존재한다.<br>
아마 css에서 배울 듯 하다.<br>
</details>

<details>
<summary>고정된 관계 태그</summary>
'li' 태그는 리스트를 나타내는 태그이다<br>
해당 태그를 사용할 때, 'ul', 'ol' 로 감싸줘 li에 속성을 부여할 수 있다.<br>
목록끼리 구분을 하기 위한 경계의 역할을 해주는 것이다.<br>
</details>