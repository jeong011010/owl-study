# JS

__Java Script__   
JAVA 언어를 사용하여 HTML, CSS로만 이루어진 정적인 페이지에 동적인 기능을 추가해주는 역할.

<br>

사용자와 상호작용하기 위해 만들어진 언어  
그러므로 프로그래밍 언어라고 할 수 있음

## JS 명령어

__기본 틀__

```
<script>  
    명령어  
</script>  
```

위와 같이 JS를 사용할 수 있다.

<br>

- document.write("내용") 
> JS 출력문이다.  
> 따옴표로 감싸면 안의 내용이 출력된다.  
> 감싸지 않으면 안의 내용이 실행되어 결과가 출력된다.  

<br>

- alert("내용")
> JS 경고창 출력

<br>

- document.querySelector('태그')
> 특정 태그를 선택

<br>

- document.querySelector('태그').style.속성='변경내용'
> 특정 태그의 속성 style을 변경내용대로 변경

<br>

- if(조건) {script}
- else if(조건) {script}
- else {script}
> 조건에 따라 script 내용을 실행하거나 하지 않는다.

<br>

## 속성값

- onclick = "" : 클릭될 때 이벤트 실행
- onchange = "" : 바꼈을 때 이벤트 실행
- onkeydown = "" : 눌릴 때 이벤트 실행

## 특징

<details>
<summary>JS와 HTML 차이</summary>

- HTML은 정적(static)
- JS는 동적(dynamic)

```
<html>
<script>
    documnet.write(1+1)
</script>
1+1
<html>
```

결과

```
2
1+1
```

위와 같이 HTML과 다르게 JS는 동적으로 실행된다는 특징이 있다.

</details>

<details>
<summary>이벤트</summary>
브라우저는 이벤트를 감지하고 알려줄 수 있음.  
이를 통해 사용자와 웹페이지가 상호 작용이 가능하도록 함.
<br><br>
다양한 event handler와 event type을 통해 여러가지 동작으로 상호작용 할 수 있음
</details>