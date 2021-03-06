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

- title : 제목 (tap title)
- meta : 문자 해석 [utf-8]
- body : 본문 태그
- head : 본문을 설명하는 태그
- html : body, head를 감싸는 태그

- iframe : 현재 브라우저에 또다른 HTML 페이지를 삽입 (inline Frame)

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
<summary>고정된 부모자식 관계 태그</summary>
'li' 태그는 리스트를 나타내는 태그이다<br>
해당 태그를 사용할 때, 'ul', 'ol' 로 감싸줘 li에 속성을 부여할 수 있다.<br>
목록끼리 구분을 하기 위한 경계의 역할을 해주는 것이다.<br><br>
'html' 태그 또한 'body', 'head' 태그를 감싸는 역할이다.<br>
</details>

<details>
<summary>meta charset="utf-8" 이게 뭐냐면</summary>
언어가 저장된 방식대로 다시 해석해줘야 하는 것<br>
영어로 썼는데 자판 그대로 한글로 나오면 읽기 굉장히 힘듬<br>
그것처럼 __UTF-8__이라는 형식으로 썼기 때문에 UTF-8 형식으로 해석해서 표시하라는 뜻<br>
</details>

<details>
<summary>하이퍼 텍스트</summary>
HTML의 HT가 Hyper Text를 의미한다.<br>
'a' 태그에서 하이퍼링크 속성을 사용할 수 있다.<br>
'href' (HyperText Reference) 속성을 사용하여 a 태그를 클릭하여 링크를 걸 수 있는 것이다.<br>
'href'는 link의 목적지를 가르키는 중요한 속성이다.<br><br>
'target' 속성을 이용하여 현재 또는 새로운 탭, 브라우저에 링크되도록 할 수 있다.<br>
</details>

<details>
<summary>iframe</summary>
iframe이란 Inline Frame의 약자<br>

__현재 브라우저에 렌더링되고 있는 문서 안에 또 다른 HTML 페이지를 삽입할 수 있도록 하는 기능__<br>
video, audio 태그들로 대체가 가능하지만, 다른 url의 페이지를 현재 페이지의 일부처럼 렌더링 할 수 있는 특징을 가지고 있음<br>
</details>

## 부록

- 댓글 기능

![캡처](https://user-images.githubusercontent.com/28985560/166646141-45ea7419-67de-4e1c-8112-8ff3b9e99614.PNG)

[DISQUS](https://disqus.com/)의 서비스를 이용하여 댓글 기능을 구현해본다.  
물론 웹 서버로 실행해야 기능이 실행된다.