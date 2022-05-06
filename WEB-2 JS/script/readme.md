# JS

__Java Script__   
JAVA 언어를 사용하여 HTML, CSS로만 이루어진 정적인 페이지에 동적인 기능을 추가해주는 역할.

## JS 명령어

__기본 틀__

```
<script>  
    명령어  
</script>  
```

위와 같이 JS를 사용할 수 있다.


- document.write("내용") 
> JS 출력문이다.  
> 따옴표로 감싸면 안의 내용이 출력된다.  
> 감싸지 않으면 안의 내용이 실행되어 결과가 출력된다.  

- alert("내용")
> JS 경고창 출력

## 속성값

- onclick = "" : 클릭될 때 이벤트 실행
- onchange = "" : 바꼈을 때 이벤트 실행
- onkeydown = "" : 눌릴 때 이벤트 실행

<br><br>

- "".length : 문자 개수 반환
- "".toUpperCase() : 대문자로 변환
- "".indexOf('문자') : 해당 문자의 시작 위치 반환


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

<details>
<summary>1+1과 '1'+'1'</summary>
웬만한 다른 언어 syntex에서도 통일되는 것 처럼 JS에서도 Data Type이 있음.<br><br>
문자열과 숫자가 다르며, 더할수 있음<br><br>

- 1+1 은 num+num 이므로 2가 반환됨<br>
- '1'+'1'은 string+string 이므로 11이 반환됨<br>
</details>